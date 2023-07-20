import requests
from bs4 import BeautifulSoup
from papago import *
import json

def USA():
    url = 'https://edition.cnn.com/us'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('body > div.layout__content-wrapper.layout-no-rail__content-wrapper > section.layout__wrapper.layout-no-rail__wrapper > section.layout__main.layout-no-rail__main > div > section > div > div > div > div:nth-child(1) > div > div.zone__items.layout--wide-left-balanced-2 > div:nth-child(1) > div > div > div > div.container_lead-plus-headlines__cards-wrapper > div > div > div:nth-child(1) > a:nth-child(2) > div > div > span').text
    img = soup.select_one('body > div.layout__content-wrapper.layout-no-rail__content-wrapper > section.layout__wrapper.layout-no-rail__wrapper > section.layout__main.layout-no-rail__main > div > section > div > div > div > div:nth-child(1) > div > div.zone__items.layout--wide-left-balanced-2 > div:nth-child(1) > div > div > div > div.container_lead-plus-headlines__cards-wrapper > div > div > div:nth-child(1) > a:nth-child(1) > div > div > div.image__container.image > picture > img')['src']
    url =  soup.select_one('body > div.layout__content-wrapper.layout-no-rail__content-wrapper > section.layout__wrapper.layout-no-rail__wrapper > section.layout__main.layout-no-rail__main > div > section > div > div > div > div:nth-child(1) > div > div.zone__items.layout--wide-left-balanced-2 > div:nth-child(1) > div > div > div > div.container_lead-plus-headlines__cards-wrapper > div > div > div:nth-child(1) > a:nth-child(2)')['href']
    title = get_translate(str(title))

    result = {
        'country': 'USA',
        'title': title,
        'img': img,
        'url': 'https://edition.cnn.com/' + url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)


def Japan():
    url = 'https://www.yomiuri.co.jp/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('body > div.home-2021-primary > div.home-2021-primary__main > div.headline > article:nth-child(1) > div > h3 > a').text
    img = soup.select_one('body > div.home-2021-primary > div.home-2021-primary__main > div.headline > article:nth-child(1) > figure > a > picture > img')['src']
    url =  soup.select_one('body > div.home-2021-primary > div.home-2021-primary__main > div.headline > article:nth-child(1) > div > h3 > a')['href']   
    title = get_translate(str(title))

    result = {
        'country': 'Japan',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)


print(USA())
print(Japan())