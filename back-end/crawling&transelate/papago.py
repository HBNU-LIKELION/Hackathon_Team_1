import requests
import json
import urllib.request
from secret import *

client_id = "STM1RaKY9idSeW0QaxTz"
client_secret = "DGclz7YbwM"

def get_translate(text):
    lang = get_lang(text)
    data = "source="+ str(lang) +"&target=ko&text=" + text
    url = "https://openapi.naver.com/v1/papago/n2mt"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request, data=data.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        result = json.loads(response_body)
        return(result['message']['result']['translatedText'])
    else:
        print("Error Code:" + rescode)
        
def get_lang(text):
    content = "query=" + text
    url = "https://openapi.naver.com/v1/papago/detectLangs"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request, data=content.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        lang = json.loads(response_body)
        return lang['langCode']
    else:
        print("Error Code:" + rescode)

