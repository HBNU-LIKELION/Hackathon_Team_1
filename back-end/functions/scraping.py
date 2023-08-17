from datetime import datetime
import requests
import country_info
import func
#신규 나라 추가 코드 예시
# requests.post("http://223.130.139.67:8000/Issue/", json=Vietnam()) 
country=[]
for c_info in country_info.country_infos:  
    country.append(
        func.news_scraping(
            c_info['url'],
            c_info['plus_url'],
            c_info['title_path'],
            c_info['img_path'],
            c_info['article_url'],
            c_info['country_name'],
            c_info['article_path'],
            c_info['spcial_picture'],
        )
    ) 
# 조회수 0으로 초기화와 동시에 기사 내용 최신화
for i in range(len(country)):
    if country[i]["title"] != "Not-Found":
        print(datetime.today().strftime("%Y-%m-%d %H:%M") )
        update_data = {
        "country": country[i]["country"],
        "title": country[i]["title"],
        "img": country[i]["img"],
        "url": country[i]["url"],
        "content": country[i]["content"],
        "visit_count": 0,
        "created_at": datetime.today().strftime("%Y-%m-%d %H:%M")
        }
        #patch요청
        response = requests.patch("http://223.130.139.67:8000/Issue/" + str(i+1) + "/", update_data)
        if response.status_code == 200:
            print(country[i]["country"], "Successfully updated:")
        else:
            print(country[i]["country"], "Failed to update:")
    else:
        print(country[i]["country"], "erro no patch")
        response = requests.patch("http://223.130.139.67:8000/Issue/" + str(i+1) + "/", {
        "visit_count": 0,
        })
    #post요청
    # response = requests.post("http://223.130.139.67:8000/Issue/", update_data)    


# requests.post("http://223.130.139.67:8000/Issue/", json=Brazil())