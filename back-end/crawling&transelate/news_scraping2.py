import requests
from bs4 import BeautifulSoup
# from papago import *
import json

def Germany():
    url = 'https://www.welt.de/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#main > section.c-stage.c-stage--default.has-contrasting-background > div.u-grid-container.c-stage__teasers > div.u-grid-item.is-grid-col-mobile-s-12.is-first > article > div > div.c-teaser__body > h4 > a').text
    img = soup.select_one('#main > section.c-stage.c-stage--default.has-contrasting-background > div.u-grid-container.c-stage__teasers > div.u-grid-item.is-grid-col-mobile-s-12.is-first > article > header > div > picture > img')['src']
    url =  soup.select_one('#main > section.c-stage.c-stage--default.has-contrasting-background > div.u-grid-container.c-stage__teasers > div.u-grid-item.is-grid-col-mobile-s-12.is-first > article > div > div.c-teaser__body > h4 > a')['href']
    # title = get_translate(str(title))

    result = {
        'country': 'Germany',
        'title': title,
        'img': img,
        'url': 'https://www.welt.de/' + url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)


def UK():
    url = 'https://www.bbc.com/news/uk'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#topos-component > div.mpu-available > div:nth-child(1) > div > div.nw-c-seven-slice.gel-layout__item.gs-u-pb\+\@m.gel-1\/1\@xl.gel-1\/1\@xxl.gs-u-ml0.nw-o-keyline.nw-o-no-keyline\@m.gs-u-display-block\@xs.gs-u-display-block\@l.gs-u-display-block\@xl.gs-u-display-none\@xxl > div > div.gs-c-promo-body.gs-u-mt\@xxs.gs-u-mt\@m.gs-c-promo-body--primary.gs-u-mt\@xs.gs-u-mt\@s.gs-u-mt\@m.gs-u-mt\@xl.gel-1\/3\@m.gel-1\/2\@xl > div:nth-child(1) > a').text
    img = soup.select_one('#topos-component > div.mpu-available > div:nth-child(1) > div > div.nw-c-seven-slice.gel-layout__item.gs-u-pb\+\@m.gel-1\/1\@xl.gel-1\/1\@xxl.gs-u-ml0.nw-o-keyline.nw-o-no-keyline\@m.gs-u-display-block\@xs.gs-u-display-block\@l.gs-u-display-block\@xl.gs-u-display-none\@xxl > div > div.gs-c-promo-image.gs-u-mb.gs-u-mb0\@xs.gel-2\/3\@m.gel-1\/2\@xl > div > div > img')['src']
    url = 'https://www.bbc.com'
    url +=  soup.select_one('#topos-component > div.mpu-available > div:nth-child(1) > div > div.nw-c-seven-slice.gel-layout__item.gs-u-pb\+\@m.gel-1\/1\@xl.gel-1\/1\@xxl.gs-u-ml0.nw-o-keyline.nw-o-no-keyline\@m.gs-u-display-block\@xs.gs-u-display-block\@l.gs-u-display-block\@xl.gs-u-display-none\@xxl > div > div.gs-c-promo-body.gs-u-mt\@xxs.gs-u-mt\@m.gs-c-promo-body--primary.gs-u-mt\@xs.gs-u-mt\@s.gs-u-mt\@m.gs-u-mt\@xl.gel-1\/3\@m.gel-1\/2\@xl > div:nth-child(1) > a')['href']   
    # title = get_translate(str(title))

    result = {
        'country': 'UK',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)

def Italy():
    url = 'https://www.repubblica.it/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#home > main > div:nth-child(2) > div.gd-column-8 > section:nth-child(1) > div > div > article > div > h2 > a:nth-child(1)').text
    img = soup.select_one('#home > main > div:nth-child(2) > div.gd-column-8 > section:nth-child(1) > div > div > article > figure > a > picture > img')['src']    
    url =  soup.select_one('#home > main > div:nth-child(2) > div.gd-column-8 > section:nth-child(1) > div > div > article > div > h2 > a:nth-child(1)')['href']   
    # title = get_translate(str(title))

    result = {
        'country': 'Italy',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)   
    return str(json_val)

def Brazil():
    url = 'https://www.uol.com.br/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#app > div > div:nth-child(7) > section:nth-child(2) > div > div > div:nth-child(2) > div > div.col-24.col-lg-15 > div > div > div:nth-child(1) > div > div.col-24.col-lg-16 > div > div.col-24.col-lg-12.sectionGrid__grid__columnOne > article:nth-child(1) > a').text
    img = soup.select_one('#app > div > div:nth-child(7) > section:nth-child(2) > div > div > div:nth-child(2) > div > div.col-24.col-lg-15 > div > div > div:nth-child(1) > div > div.col-24.col-lg-16 > div > div.col-24.col-lg-12.sectionGrid__grid__columnOne > article:nth-child(1) > a > figure > picture > img')['src']
    url =  soup.select_one('#app > div > div:nth-child(7) > section:nth-child(2) > div > div > div:nth-child(2) > div > div.col-24.col-lg-15 > div > div > div:nth-child(1) > div > div.col-24.col-lg-16 > div > div.col-24.col-lg-12.sectionGrid__grid__columnOne > article:nth-child(1) > a')['href']   
    # title = get_translate(str(title))

    result = {
        'country': 'Brazil',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)

def Korea():
    url = 'https://www.joongang.co.kr/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#container > section > div:nth-child(5) > section > div:nth-child(5) > div > div:nth-child(1) > div > div > h2 > a').text
    img = soup.select_one('#container > section > div:nth-child(5) > section > div:nth-child(5) > div > div:nth-child(1) > div > figure > a > img')['src']
    url =  soup.select_one('#container > section > div:nth-child(5) > section > div:nth-child(5) > div > div:nth-child(1) > div > div > h2 > a')['href']   
    # title = get_translate(str(title))

    result = {
        'country': 'Korea',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)

print(Germany())
print(UK())
print(Italy())
print(Brazil())
print(Korea())