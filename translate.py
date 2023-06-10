# count token sentence by sentennce
# if find  "." that mean one sentence
# if complete one sentence and it token bigger than setup token we will stop
# else continue
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
        return 'Please behave like the best story writer, translate the following text into Vietnamese (Novel format) (show translated part only do not talk any thing else). The text to be translated is a %s novel. \n%s' % (genres, content)
    else:
        return 'Please behave like the best story writer, translate the following text into Vietnamese (Novel format) (show translated part only do not talk any thing else). The text to be translated is a  %s novel. The text to be translated is a continuation of the story.\nSuammary previous part: %s \nPart to be translated: %s' % (genres, sum_content, content)



def concatenate_files(file_list, output_file):
    with open(output_file, 'w') as outfile:
        for file_path in file_list:
            with open(file_path, 'r') as infile:
                text = infile.read().strip()
                outfile.write(text + '\n')

    print("Đã nối các file thành công!")

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


if __name__ == '__main__':
    file_list = []
    # text need translate:
    input_text = '''My head hurts so much. If I knew, I wouldn’t have drank so much last night.”Gu Qing’an’s head felt sluggish, as if she’d been hit with a hammer.She felt as if she were lying on the floor, with the cold penetrating her body. She opened her eyes, raised herself up with her hands, and stood barely upright.When she looked around, she saw old wooden furniture and half a candle on the bedside candlestick. She could see that the night was still bright through the window.The room looked like it had been robbed.“Where is this?” Gu Qing’an was a little confused.Her head hurt in the back region. Gu Qingan touched the back of her head with her hand.#pleasereadthischapteratwondernovels.comBut, she felt something warm on her hand.Blood!Gu Qing’an felt scared.Her mind started racing , and a lot of memories came flooding back to her.Gu Qing’an, 16 years old.Pingzhou, Quan’an County, Northern Dacheng Kingdom. She was the eldest daughter of the Gu family in Black River city. She had studied abroad for many years. This world resembled ancient China, but there were distinctions. In general, men and women were treated equally, and women were permitted to study and take the imperial exam.A few days ago, Gu Qing’an received a letter from her family asking her to return home as soon as possible. Despite the fact that her family did not specify the reason, the tone of the letter was urgent, so she decided to return home.At that time, she was on her way home and resting at an inn.Have I transmigrated? Furthermore, my gender has changed!After years of online reading, she reluctantly accepted the reality. Nevertheless, there were more important things in front of her.“Why does my head have blood on it?”Gu Qingan frowned and had a bad feeling in her heart.She had heard a lot of scary stories about ancient daylight robberies.She tried to recall her memory, but she only remembered the time when she went to bed last night.“This is trouble…” Gu Qing’an got up and looked for a clean white cloth to wipe the blood off her head.“That’s right!! Uncle Zhao.” Gu Qing’an’s eyes brightened up; she obviously did not return home alone.How could they allow a young lady who had received attention since she was a child to travel home alone?This was, indeed, the best approach to go.Uncle Zhao, whose real name was Zhao Chiling, was a martial artist that the Gu family had hired for a long time. He wandered in the Jianghu when he was young. The way he used his sword was also well-known in Black River City. He was getting older now, but he was still strong for his age.Originally, it was Uncle Zhao who accompanied Gu Qing’an to the county city to study, and this time he also came with a letter to pick up Gu Qing’an and go home.As soon as she thought of this, Gu Qing’an immediately took action.The corridor was strangely quiet as she walked out of her room. The floor appeared to be old, and the creaking sound continued to echo as she walked.“I remember Uncle Zhao sleeping next door.” Gu Qing’an walked to his door and knocked twice.“Uncle Zhao, are you there? It’s me, Gu Qing’an.”There was silence in the room.Bang! Bang!Two more knocks.“Uncle Zhao? Uncle Zhao?”Gu Qing’an inhaled deeply and pushed hard.Splatter.The door was pushed open.Gu Qing’an’s pupils constricted, and a cold chill ran down her spine.The room was full of blood. Uncle Zhao lay motionless on the ground, his eyes widened, and his face was bruised. Even his usual sword was dropped aside, and a bloody hole could be seen in his chest.Gu Qingan’s body trembled violently. She was an ordinary person in her previous life, and she couldn’t analyse any clues, but she understood that this Inn was very dangerous.Subconsciously, she wanted to leave the Inn immediately, but she held back herself.Undoubtedly, the Inn was dangerous, but so was the wilderness.Besides, she was not dead yet, which meant that at least the danger would  not break out immediately. She must gather supplies before leaving; else, going into the wild would be equal to committing suicide.She walked forward with fear and closed uncle Zhao’s eyes. “Sorry, rest in peace.”. Gu Qing’an, who transmigrated, did not have strong sentiments for uncle Zhao, but she could not bear seeing someone of the same kind die horribly before her eyesAfter that, she looked around the room, but all she could find were a few silvers and some dry food on the nightstand.Putting these in the bag, Gu Qingan was about to leave. After thinking about it, she picked up the sword on the ground, took a cloth, and wiped off the blood on it.“Although I haven’t practised swordsmanship, I don’t know martial arts. But it’s better to have a sharp weapon in hand than nothing.”“Next, it’s food and water.”  Gu Qing’an walked nervously down the squeaky stairs to the first floor of the Inn.It was still quiet. Gu Qingan’s hand holding the sword was slightly sweating.Exhale, inhale, exhale.For a moment, there was only her slight breathing in the Inn that echoed.At that point, the Inn was getting a little brighter, but Gu Qing’an’s heart was still chilly.Shaking her head to forcefully suppress the chaotic thoughts in her mind.“There should be some bacon and water in the kitchen, and the dry food I left in my luggage should be enough to get me back to Black River City.”Gu Qing’an was about to lift the curtain of the kitchen, when she noticed a strong smell of blood. She heard a chewing sound coming from the kitchen.It was not the kind of sound that humans could make.  It was like a ferocious beast gnawing at meat and bones.Suddenly, cold sweat ran down from Gu Qing’an’s head.“There’s something in the kitchen!”Calm yourself down.Don’t panic, walk slowly.Gu Qing’an didn’t even dare to breathe.  She retreated after minimising the sound of her footsteps by tiptoeing backwards.Ding!Gu Qing’an instantly saw a circular radar map that appeared to encompass her, and in front of her was a sparkling red dot that was slightly fluctuating.[A demon has been spotted within five metres of the host. Activating the Demon Hunting System][Please check your novice gift bag]Such a voice arose abruptly in her thoughts. Simultaneously, a light-red interface appeared in Gu Qing’an’s field of vision.#pleasereadthischapteratwondernovels.com“Demon!”Gu Qingan was shocked. Her feet were unstable for a fleeting second. A clear squeak could be heard on the old floor.The sound of gnawing stopped.In an instant, Gu Qingan’s back was soaked in a cold sweat.[To open the the novice gift bag, yes / to die]Gu Qing’an: “Yes?”Before she could react, a shadow rushed out of the kitchen and approached her directly.Dang!At the critical moment, Gu Qing’an instinctively raised her sword to stop it.The enormous force from the knife pushed her back four or five steps, almost causing her grip to loosen.Damn! Gu Qing’an’s heart sank as she realised she had no chance against this demon. She quickly exclaimed, “Yes!”She could only rely on the system’s reward.[Opened Novice Pack, Acquired Skill – Retribution][Retribution LV.1: Inflicting a Lot of Damage on Demons. Cooldown Period:30s]“Retribution?” Gu Qing’an was stunned. Then, she felt a force in her body that she couldn’t explain, and it rushed to her heart easily and freely.She turned her head back, and now she could see exactly what was attacking her.Unexpectedly, a monkey three to four feet long, with rough black hair, and scarlet eyes stood before her. Its claws shone with a cold light and were covered with blood and pieces of meat. The monkey’s mouth was wide open, and it was smiling at her, revealing its sharp teeth to Gu Qing’an.Gu Qing’an spat and tightened her grasp on the knife.This demon monkey is faster and stronger than I am, so running is out of the question!I have no choice but to fight this demon!Gu Qing’an displayed fierceness, and she felt a burning sensation of blood boiling in her heart.She calculated that the retribution cooldown period was 30 seconds, and this demon would never allow herself the chance to use it again, so she only had one opportunity.Staring at the monkey demon, she dared not relax.Wheeze!The demon monkey rushed at Gu Qing’an and she waved her sword.Unexpectedly, the monkey demon revealed a humane sly smile and squatted down to avoid her knife.It swung its claws straight towards Gu Qing’an’s throat.Seeing a young girl of good age was about to die.“Right now!” Gu Qing’an’s eyes lit up, and she took back her sword, and used all her strength to slash the monkey demon’s head off.Dang!Gu Qing’an felt like she had cut a piece of fine iron. The sharp sword just pierced the skin of the monkey demon.She clenched her teeth.Now comes the retribution!A force within her body surged like a torrent into the sword.Wheeze!Like a hot knife through butter, the originally indestructible monkey demon was actually split in two by this head-on knife attack.“Haha.” Gu Qing’an looked at the monkey demon, which had split in half, and grinned madly.Suddenly she felt dizzy. She looked down and noticed that her left shoulder had been scratched, revealing bloodstains and the surface of the wound turned black.“Oh shit.. Poison.'''

    # small parts from raw data 
    list_part = seperated_part(input_text)
    
    num_of_part = len(list_part)

    
    # # translate following text
    # for i in range(num_of_part):
    #     list_part.append('Translate the Part %d to Vietnamese as a writer. The given text\'s genre follow your previous answer in the format below.\n```\ncontent\n```.' % (i+1))

    chatbot = Chatbot(config={
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJuYm1pbmgyMTAxMzgxQHN0dWRlbnQuY3R1ZXQuZWR1LnZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItWkFCTXlremplUm0wV0VFdGlUMjMwVVNNIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2Q5YmM5NzlmZTE4ZWZkOWM0ZjI3ZGUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg2MTM1MjkyLCJleHAiOjE2ODczNDQ4OTIsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIn0.ZZyNJxXDkHiCCU3ouTmaqpJLl2MOh4P9sCSa1vtfphll_I2glgafKAgRcpsz1nJyRO9EEI4cx27ZY1pAlncp-8BbpNnUlDL4iMgU0NZP2JC9QJhbMwC-IznEPqpwA6gbNr6ZwAKIncd4EVCrr7KR5tWd0EU4NXlSsvIxt06wzWP8zZDzm3b0RetSm_FkcuNSKaE2-eayvjoGAne6suTYii_G5TJKVjVb_Ny04xGvIQRQJfgtytUn_ErQ0ge7qyYTmusZ4hWJzKi_WQx8hc7lQUJYIbSxLfliLBzbn-rQq9SzVRbXkUObF5UfIvGpweiSbbqaDWxgNfqGUAb0wRW-sQ"
    })
    print("Chatbot: ")
    gens='Horror, Martial Arts, Mystery'
    # conversation_id = None
    #demo\

    ####
    for i in range(num_of_part):
    # for i in range(1):
        response = ''
        response_bk = None

        conversation_id = None
        if i == 0:
            pompt = translate(list_part[i],gens)
        else: 
            sumsum_content = summarize(chatbot,list_part[i-1])
            pompt = translate(list_part[i],gens,sumsum_content,False)
        prev_text = ""
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
        with open(os.path.join('GPTcommunication','text'+str(i)+'.txt'), "w") as file:
            file.write(response_bk+response)
        file_list.append(os.path.join('GPTcommunication','text'+str(i)+'.txt'))
        #when everything done then
        chatbot.delete_conversation(conversation_id)
        chatbot.reset_chat()
        conversation_id = None

    concatenate_files(file_list,os.path.join('tonghop','all.txt'))

