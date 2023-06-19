import json
import os
import re
from bs4 import BeautifulSoup
import requests
import translateGPT
# Tạo một session
session = requests.Session()

def get_info_ln(url):
    response = session.get(url,timeout=10)
    # Kiểm tra mã trạng thái của response
    if response.status_code == 200:
        # Truy cập nội dung của trang web đã được tải về
        content = response.text
 


        soup = BeautifulSoup(content, 'html.parser')
        data = {}
        


        # Tìm các thẻ <script> có kiểu dữ liệu là "text/javascript"
        script_tag = soup.find('script', id='wp-manga-js-extra')
        script_content = script_tag.string
        start_index = script_content.find('"manga_id":"') + len('"manga_id":"')
        end_index = script_content.find('"', start_index)
        manga_id = script_content[start_index:end_index]
        # Tìm giá trị của ajax_url
        start_index = script_content.find('"ajax_url":"') + len('"ajax_url":"')
        end_index = script_content.find('"', start_index)
        ajax_url = script_content[start_index:end_index].replace('\\/', '/')
        # Lấy tên truyện
        title_tag = soup.find('title')
        if title_tag is not None:
            title = title_tag.get_text()
        else:
            title = None


        summary_content = soup.find('div', class_='summary__content show-more').text.strip()
        data['title'] = title
        # Gắn nội dung vào đối tượng JSON
        data['Summary'] = summary_content
        for heading, content in zip(soup.find_all('h5'), soup.find_all(class_='summary-content')):
            key = heading.text.strip()
            value = content.text.strip()
            if ',' in value:
                value = [item.strip() for item in value.split(',')]
            data[key] = value

        # Chuyển đối tượng thành chuỗi JSON

        return title, manga_id, ajax_url, data
    else:
        return None ,None, None, None

def get_content_of_chapter(url):
    response = session.get(url,timeout=10)
    if response.status_code == 200:
        # Truy cập nội dung của trang web đã được tải về
        content = response.text
        soup = BeautifulSoup(content, 'html.parser')
        div = soup.find('div', class_='reading-content')
        content = div.get_text(strip=True)
        return content
    else:
        return None
    
def get_list_chapter(url,manga_id):
    data = {
        'action': 'manga_get_chapters',
        'manga': manga_id
    }
    response = requests.post(url, data=data)
    if response.status_code == 200:
        data = response.text
        soup = BeautifulSoup(data, 'html.parser')
        # Tìm tất cả các thẻ <a> có thuộc tính href
        links = soup.find_all('a')
        # Lưu trữ các đường link vào danh sách Python
        link_list = [link['href'] for link in links]
        name_list = [name.text.strip() for name in links]
        name_list.reverse()
        link_list.reverse()
        list_uri = []
        list_name_chap = []
        for a, b in zip(link_list, name_list):
            if b != "":
                list_name_chap.append(b)
                list_uri.append(a)
        if len(list_uri) == len(list_name_chap):
        # In danh sách các đường link
            return list_uri, list_name_chap
        else:
            exit()

def create_directories(subdirectory):
    base_directory = os.path.join('trans','.data_stolen')

    if not os.path.exists(base_directory):
        os.makedirs(base_directory)
        print("Đã tạo thư mục:", base_directory)
    else:
        print("Thư mục đã tồn tại:", base_directory)

    # Tạo các thư mục con
    path = os.path.join(base_directory, subdirectory)
    if not os.path.exists(path):
        os.makedirs(path)
        print("Đã tạo thư mục:", path)
    else:
        print("Thư mục đã tồn tại:", path)

def normalize_string(input_string):
    # Loại bỏ các ký tự đặc biệt và khoảng trắng
    normalized_string = re.sub(r"[^\w\s]", "", input_string)
    # Chuyển thành chữ thường và thay thế khoảng trắng bằng dấu gạch dưới
    normalized_string = normalized_string.lower().replace(" ", "_")
    return normalized_string

if __name__ == '__main__':
    url = 'https://wondernovels.com/novels/despite-being-pursued-as-a-villain-all-the-heroines-on-my-side/'
    manga_name, manga_id, url_database, info_comon = get_info_ln(url)
    path_save = os.path.join('trans','.data_stolen',normalize_string(manga_name))
    create_directories(normalize_string(manga_name))
    list_info = get_list_chapter(url_database,manga_id)
    info_comon['name_chap']= list_info[1]
    with open(os.path.join(path_save,'info.json'), "w", encoding="utf-8") as file:
        json.dump(info_comon, file,indent=4)

    for i in range(len(list_info[0])):
        with open(os.path.join(path_save,normalize_string(list_info[1][i])+'.txt'), "w", encoding="utf-8") as file:
            file.write(get_content_of_chapter(list_info[0][i]))  # Ghi nội dung yêu cầu vào tập tin
            print("Dữ liệu đã được ghi vào tập tin", os.path.join(path_save,normalize_string(list_info[1][i])+'.txt'))
    

    _ = input('PRESS ENTER TO TRANS >>>')
    translateGPT.GPTtranslate(path_save)