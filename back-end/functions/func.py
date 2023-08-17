import requests
from bs4 import BeautifulSoup
from papago import *
import re
from gpt import *
import country_info

def news_scraping(url_address,second_url_address,title_path,img_path,url_path,country_name,content_path,special_picture):    
    try:
        url = url_address              
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')

        title = soup.select_one(title_path).text

        # title양 옆 공백 제거
        title = re.sub(r"^\s+|\s+$", "", title)

        # 한국어가 아니면 title 번역 후 저장
        if country_name != "대한민국":
            title = get_translate(str(title))

        #이미지 예외 처리
        if country_name == '독일':
            prop = 'srcset'
            img = soup.select_one(img_path)[prop].split()[0]
        else:
            prop = 'src'
            img = soup.select_one(img_path)[prop]



        #img url이 상대경로인 경우의 나라
        if img[0] != 'h':
            img=second_url_address+img

        img_status = requests.get(img)
        #img를 불러오지 못했다면 고정 이미지를 할당

        if not img_status.status_code == 200:
            img = special_picture

        url = soup.select_one(url_path)['href']
        #a태그의 url이 상대경로인 나라
        if url[0] != 'h':
            url =  second_url_address + url         


        # 기사 본문 스크래핑 함수 호출
        content=content_scraping(url,content_path)

        # 정리된 데이터를 딕셔너리 형태로 저장
        result = {
            'country': country_name,
            'title': title,
            'img': img,
            'content': content,
            'url': url,        
        }

    #에러 날 시 title을 error로 지정하고 img와 url은 한밭대 멋사로 넣는다.(형식을 맞춰 오류가 안나게 하기 위함 아무거나 상관 x)        
    except Exception as ex:
        print('error:', end='')
        print(country_name)
        print(ex)
        result = {
            'country': country_name,
            'title': 'Not-Found',
            'img': country_info.lion_img,
            'content': 'error',
            'url': 'http://hanbat-likelion.kr/',        
        }

    return result

def content_scraping(url,content_path):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')    
    content = soup.select_one(content_path).text
    content = gpt(content)
    return content