import requests
from bs4 import BeautifulSoup
from papago import *
import json

def USA():
    url = 'https://www.nytimes.com/'
    page = requests.get(url)

    soup = BeautifulSoup(page.content, 'html.parser')
    
    title = soup.select_one('#site-content > div > div.smartphone.tablet.desktop > div > div.css-ybekjx.e1ppw5w20 > div > div.css-1l10c03.e17qa79g0 > div > div > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div.css-1432v6n.e17qa79g0 > div > section:nth-child(1) > a > div > div > h3').text
    img = soup.select_one('#site-content > div > div.smartphone.tablet.desktop > div > div.css-ybekjx.e1ppw5w20 > div > div.css-1l10c03.e17qa79g0 > div > div > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div.css-1e7omub.e17qa79g0 > figure > a > div > picture > img')['src']
    url =  soup.select_one('#site-content > div > div.smartphone.tablet.desktop > div > div.css-ybekjx.e1ppw5w20 > div > div.css-1l10c03.e17qa79g0 > div > div > div > div:nth-child(1) > div > div > div > div > div.css-1432v6n.e17qa79g0 > div > section:nth-child(1) > a')['href']
    title = get_translate(str(title))

    result = {
        'country': 'USA',
        'title': title,
        'img': img,
        'url': url
    }
    json_val = json.dumps(result, ensure_ascii=False)
    return str(json_val)

print(USA())
