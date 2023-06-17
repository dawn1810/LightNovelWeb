import os
import re
from bs4 import BeautifulSoup
import requests

# Tạo một session
session = requests.Session()

def get_info_ln(url):
    response = session.get(url,timeout=10)
    # Kiểm tra mã trạng thái của response
    if response.status_code == 200:
        # Truy cập nội dung của trang web đã được tải về
        content = response.text
        soup = BeautifulSoup(content, 'html.parser')
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
        return title, manga_id, ajax_url
    else:
        return None, None, None

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
        link_list.pop(0)
        link_list.reverse()
        # In danh sách các đường link
        return link_list
    

def create_directories(subdirectory):
    base_directory = "data_stolen"

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


if __name__ == '__main__':
    url = 'https://wondernovels.com/novels/at-the-beginning-of-the-novel-the-heroine-begged-the-retired-villain/'
    manga_name, manga_id, url_database = get_info_ln(url)
    path_save = os.path.join('data_stolen',manga_name)
    create_directories(manga_name)

    list_chapter = get_list_chapter(url_database,manga_id)
    for i in range(len(list_chapter)):
        with open(os.path.join(path_save,'Chapter '+str(i+1)+' '+manga_name+'.txt'), "w", encoding="utf-8") as file:
            file.write(get_content_of_chapter(list_chapter[i]))  # Ghi nội dung yêu cầu vào tập tin
            print("Dữ liệu đã được ghi vào tập tin", os.path.join(path_save,'Chapter '+str(i+1)+' '+manga_name+'.txt'))