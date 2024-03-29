# count token sentence by sentennce
# if find  "." that mean one sentence
# if complete one sentence and it token bigger than setup token we will stop
# else continue
import json
from time import sleep
import tiktoken
import os
#/////////////////////////////////my space///////////////////////////////
import poe

# python3 -m pip install --upgrade revChatGPT --user
# try it bro

#install --upgrade revChatGPT thoi xem sao

#///////////////////////////////////////////////////////////////////////
max_token = 1000
# count token 
def num_tokens_from_messages(messages, model="gpt-3.5-turbo-0301"):
    encoding = tiktoken.encoding_for_model(model)
    num_tokens = 0
    for message in messages:
        num_tokens += 4  # every message follows <im_start>{role/name}\n{content}<im_end>\n
        for key, value in message.items():
            num_tokens += len(encoding.encode(value))
            if key == "name":  # if there's a name, the role is omitted
                num_tokens += -1  # role is always required and always 1 token
    num_tokens += 2  # every reply is primed with <im_start>assistant
    return num_tokens


def find(s, ch):
    return [i for i, ltr in enumerate(s) if ltr == ch]

def seperated_part(input_text):
    # if input text smaller than maxtoken return it as result
    if num_tokens_from_messages([{'items':input_text}]) < max_token:
        return [input_text]
    start = 0
    result = []
    words = find(input_text, '.') + find(input_text, '!') + find(input_text, '?')
    for i in range(len(words)):
        if num_tokens_from_messages([{'items':input_text[start : words[i]]}]) > max_token:
            result.append(input_text[start : words[i-1]])
            start = words[i-1]
    result.append(input_text[start:])
    return result

def summarize(client,content):
    print("Đang tóm tắt....")
    response_bk = None
    for chunk in client.send_message("chinchilla", content):
        pass
    response_bk = chunk["text"]
    return response_bk
    

def translate(content, genres, sum_content = None, part = True):
    if part:
        return 'Please behave like the best story writer, translate the following text into Vietnamese (Novel format) (show translated part only do not talk any thing else) (must not translate proper noun). The text to be translated is a %s novel. \n%s' % (genres, content)
    else:
        return 'Please behave like the best story writer, translate the following text into Vietnamese (Novel format) (show translated part only do not talk any thing else) (must not translate proper noun). The text to be translated is a  %s novel. The text to be translated is a continuation of the story.\nSuammary previous part: %s \nPart to be translated: %s' % (genres, sum_content, content)



def concatenate_files(file_list, output_file, datajson = None):
      
    with open(output_file, 'w' ,encoding='utf-8') as outfile:
        for file_path in file_list:
            with open(file_path, 'r', encoding='utf-8') as infile:
                text = infile.read().strip()
                outfile.write(text + '\n')
                
    if datajson:
            with open(output_file, "r", encoding='utf-8') as file:
                content = file.read()
            datajson['Summary'] = content
            with open(os.path.join(os.path.dirname(output_file),'info.json'), "w", encoding="utf-8") as file:
                json.dump(datajson, file,indent=4)
            if os.path.isfile(output_file):  # Đảm bảo chỉ xử lý các tệp tin
                os.remove(output_file)
                print(f"\nDelete: {output_file}\n")

    print("\nĐã nối các file thành công!",output_file,"\n")

    # IMAGINE: Dịch phần đầu tiên (1k token < 4000):
    # PROMPT: Please behave like GPT-4 model, translate the following text into Vietnamese (show translated part only do not talk any thing else). The text to be translated is a [genre(s) of novel] novel. [content to be translated]
    # GET: [content to be translated]
    # IMAGINE: Xoá chat
# START LOOP
    # IMAGINE: Tóm tắt nội dung của phần trước đó
    # PROMPT: Summarize the following passage in a concise manner (show summarized part only do not talk any thing else): [content to be summarize]
    # GET: [content to be summarized]
    # IMAGINE: Xoá chat
    # IMAGINE: Dịch phần tiếp theo
    # PROMPT: Please behave like GPT-4 model, translate the following text into Vietnamese (show translated part only do not talk any thing else). The text to be translated is a  fantacy, isekai light novel. The text to be translated is a continuation of the story. 
        # Suammary previous part: [content to be summarized]
        # Part to be translated: [content to be translated]
# END LOOP
number_try=0

def translate_vip(auth_token,num_of_part,list_part,gens,filename,data_info = None) -> None:
    global number_try
    file_list = []
    index = 0

    while index <= num_of_part-1:
        client = poe.Client(auth_token[number_try])
    # for i in range(num_of_part):
    # for i in range(1):
        response_bk = None
        try:
            if index == 0:
                pompt = translate(list_part[index],gens)
            else: 
                sumsum_content = summarize(client,list_part[index-1])
                pompt = translate(list_part[index],gens,sumsum_content,False)
            print("Đang dịch phần đầu....")

            for chunk in client.send_message("chinchilla", pompt):
                pass
            response_bk = chunk["text"]

            with open(os.path.join('trans','GPTcommunication','text'+str(index)+'.txt'), "w", encoding='utf-8') as file:
                file.write(response_bk)
            file_list.append(os.path.join('trans','GPTcommunication','text'+str(index)+'.txt'))
            #when everything done then
            client.send_chat_break("chinchilla")

        except Exception:
            print('\n========================================err=================================\n')
            if number_try == len(auth_token)-1:
                number_try = 0
                print('\ngoing to timeout\n')

                sleep(15*60)
            else:
                number_try += 1 
            index -= 1
        index +=1


    concatenate_files(file_list,os.path.join('trans','tonghop',filename),data_info)
    
    for filepathdel in file_list:
        if os.path.isfile(filepathdel):  # Đảm bảo chỉ xử lý các tệp tin
            os.remove(filepathdel)
            print(f"\nDelete: {filepathdel}\n")
    file_list=[]



def GPTtranslate(folder_path,check_resume = False):
    auth_token = [
       'lYvUkq4tHptd1-yL7OChaA%3D%3D',
       'NFuBQziYKJtkGkjVoJrcug%3D%3D'
    ]
    with open(os.path.join(folder_path,'info.json'), 'r', encoding='utf-8') as file:
        data_info = json.load(file)
    # Lặp qua tất cả các tệp tin trong thư mục
    for filename in os.listdir(folder_path):
        print(filename)

        if filename.endswith('.txt'):  # Chỉ xử lý các tệp tin có phần mở rộng .txt
            file_path = os.path.join(folder_path, filename)
            gens = 'None'
            if 'Genre(s)' in data_info:
                gens = ", ".join(data_info['Genre(s)'])
            if not check_resume:
                sumsumlist = seperated_part(data_info['Summary'])
                translate_vip(auth_token,len(sumsumlist),sumsumlist,gens,'info.txt',data_info)

            with open(file_path, 'r', encoding='utf-8') as file:
                # Đọc nội dung của tệp tin
                input_text = file.read()
                # text need translate:

                # small parts from raw data 
                list_part = seperated_part(input_text)
                
                num_of_part = len(list_part)
                print('Seperated Into',num_of_part)
                
       
              
                print("Đang dịch....")
            
                translate_vip(auth_token,num_of_part,list_part,gens,filename)
            if os.path.isfile(file_path):  # Đảm bảo chỉ xử lý các tệp tin
                os.remove(file_path)
                print(f"\nDelete: {file_path}\n")

