# count token sentence by sentennce
# if find  "." that mean one sentence
# if complete one sentence and it token bigger than setup token we will stop
# else continue
import json
from time import sleep
import tiktoken
import re
import os
import shutil
#/////////////////////////////////my space///////////////////////////////
from revChatGPT.V1 import Chatbot

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

def summarize(chatbot,content):
    response = ''
    response_bk = None
    uuid = None
    for data in chatbot.ask(prompt = 'Summarize the following passage in a concise manner (show summarized part only do not talk any thing else): \n%s' % (content), auto_continue= True):
        uuid = data['conversation_id']
        response = data["message"]
    response_bk = response
    for data in chatbot.continue_write(conversation_id = uuid, auto_continue  = True):
        response = data["message"]
        uuid = data['conversation_id']
    #when everything done then
    chatbot.delete_conversation(uuid)
    chatbot.reset_chat()
    return response_bk+ response
    

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
                print(f"\n\n\n\nDelete: {output_file}\n\n\n\n")

    print("\n\n\n\nĐã nối các file thành công!\n\n\n\n")

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
        chatbot = Chatbot(config={"access_token": auth_token[number_try]
    })
    # for i in range(num_of_part):
    # for i in range(1):
        response = ''
        response_bk = None

        conversation_id = None
        if index == 0:
            pompt = translate(list_part[index],gens)
        else: 
            sumsum_content = summarize(chatbot,list_part[index-1])
            pompt = translate(list_part[index],gens,sumsum_content,False)
        prev_text = ""
        try:
            for data in chatbot.ask(prompt = pompt, auto_continue= True):
                conversation_id = data['conversation_id']
                response = data["message"]
                message = data["message"][len(prev_text) :]
                print(message, end="", flush=True)
                prev_text = data["message"]
                response_bk = response
            for data in chatbot.continue_write(conversation_id = conversation_id, auto_continue  = True):
                response = data["message"]
                message = data["message"][len(prev_text) :]
                print(message, end="", flush=True)
                prev_text = data["message"]
            with open(os.path.join('trans','GPTcommunication','text'+str(index)+'.txt'), "w", encoding='utf-8') as file:
                file.write(response_bk+response)
            file_list.append(os.path.join('trans','GPTcommunication','text'+str(index)+'.txt'))
            #when everything done then
            chatbot.delete_conversation(conversation_id)
            chatbot.reset_chat()
            conversation_id = None
        except Exception:
            print('\n\n\n\n========================================err===============================\n\n\n\n')
            if number_try == len(auth_token)-1:
                number_try = 0
                sleep(60*60)
            else:
                number_try += 1 
            index -= 1
        index +=1


    concatenate_files(file_list,os.path.join('trans','tonghop',filename),data_info)
    
    for filepathdel in file_list:
        if os.path.isfile(filepathdel):  # Đảm bảo chỉ xử lý các tệp tin
            os.remove(filepathdel)
            print(f"\n\n\n\nDelete: {filepathdel}\n\n\n\n")
    file_list=[]



def GPTtranslate(folder_path):
    auth_token = [
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJuYm1pbmgyMTAxMzgxQHN0dWRlbnQuY3R1ZXQuZWR1LnZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItWkFCTXlremplUm0wV0VFdGlUMjMwVVNNIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2Q5YmM5NzlmZTE4ZWZkOWM0ZjI3ZGUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg2MTM1MjkyLCJleHAiOjE2ODczNDQ4OTIsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.ZZyNJxXDkHiCCU3ouTmaqpJLl2MOh4P9sCSa1vtfphll_I2glgafKAgRcpsz1nJyRO9EEI4cx27ZY1pAlncp-8BbpNnUlDL4iMgU0NZP2JC9QJhbMwC-IznEPqpwA6gbNr6ZwAKIncd4EVCrr7KR5tWd0EU4NXlSsvIxt06wzWP8zZDzm3b0RetSm_FkcuNSKaE2-eayvjoGAne6suTYii_G5TJKVjVb_Ny04xGvIQRQJfgtytUn_ErQ0ge7qyYTmusZ4hWJzKi_WQx8hc7lQUJYIbSxLfliLBzbn-rQq9SzVRbXkUObF5UfIvGpweiSbbqaDWxgNfqGUAb0wRW-sQ",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjaGFuZG9yYWxvbmdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItTUZkOWxwVGFZcWtDaEM4SEhwYjBWeUszIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2Q4NGYyZTc0Zjk0YWM1MmJiZDNkYjgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg2ODQ2MjgwLCJleHAiOjE2ODgwNTU4ODAsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.tCsugOarLpeJeC8kDGtRwzbqNwI7pu-q5JdBr0tkGhVbYBMiKEL_umKUrH2j00AKkpdzFsbGqiG5i9bWyBbtVD9BCmBlw9lkHKSRNSHwQDPfti2gJxNiRXtsB7l2ckzlfbxWOe4mMCZGB4-NG9dTFHYn8V_zuWTPpUier1DBORFJJQmNqUh9dEtHWJCFmP4vfDIdMJvFGv-eIiaVI22pbmA-HCoovJmhOZ8C3MqxYLvR9DlrjyL2122q4nt7l-SKmo0DhBaY2i0eeT8XR4a5cyX3BoTuBcwQYHLjyS7BIty9jXA5OERvdbwnbUQLfoGxeSeNENJMf068q2sEnndi3A",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJsYWNoaW5oNTUxMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1GODgyM1BqUFhPN25iTW80TDZRWjRhQkUifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzZDhkZTdjMjc3NzY0NTZjOTJmYTllMCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODYxMjIzMjIsImV4cCI6MTY4NzMzMTkyMiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvcmdhbml6YXRpb24ud3JpdGUifQ.pEFR-pcHReAohJNreJCEOaNdX0eMqfSSxq2QUv8ZoYBTDAPxMReBqwGQCStDys_FByj4ITmtjyRYh2mv6nUmQk7OoYw5eayzrgS2jxl1GxcDaa82jc_9Pw7ymgzHjSPWdcYNszymAR7USk0WX0ldVKi-lqAXdjK0FV7JzdQszx1GgEpHGVonROnb4i0L9JVpK7WBo4bFtK_GLoFLcJWQUhRMmLSzuDNtWfh586Fxb7rdhffHC3h5HoEXDvaeBL70V0EHzax_FENglI94BwbontxPPl8G3Kkvo2PQLqAjgYUbyFwBC7YuL6-utXsLy1TRe5GWIcID5Tt1grAmMEJWng",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJodW5ndGhpbmhoMjAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1mendnRXpobjZGNGMyMG95N2MxaEcyODIifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzZGI3NzM1ZDQ4MGMzNzc5ZmI3OTA5MCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODY4MDI1MzMsImV4cCI6MTY4ODAxMjEzMywiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvcmdhbml6YXRpb24ud3JpdGUifQ.RSvrrrvdur8PyH7vwnSxQWRVC9_7teO72v6gwv6pyrtYsjywEV3Av8pBBaXzoGDlblo530daa5l0H8cnMXq3yJCEH0NJGEY7gwnGzaZaJgOlgw-hQA7NHUgL4lpV1ex1Bd298YQwsdB6gmw45QkYU-pKq2ei06VVEnNPsUg-d3VRcxaKy3KESmB_43rIHXg6uchhCsACN30QkahxjjQLlggAk1kgM5Bw_0ODy8kH-LTHsAXyfJd2nB2uylWs7T2aMmgYwai12ijqJjNGUPQeEgNwm8j3rSyvBK5F9UWEtYzUaTZ7HUSYGNGig0j-zd0JdU72NKSeQsflEGHjsu0YFw",
    ]
    with open(os.path.join(folder_path,'info.json'), 'r', encoding='utf-8') as file:
        data_info = json.load(file)
    # Lặp qua tất cả các tệp tin trong thư mục
    for filename in os.listdir(folder_path):
        print(filename)

        if filename.endswith('.txt'):  # Chỉ xử lý các tệp tin có phần mở rộng .txt
            file_path = os.path.join(folder_path, filename)


            gens = ", ".join(data_info['Genre(s)'])
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
                
       
              
                print("Chatbot: ")
            
                translate_vip(auth_token,num_of_part,list_part,gens,filename)

