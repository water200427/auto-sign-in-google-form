from selenium import webdriver
import time
時間表 = {x:["08：00~08：20","12：40~13：00","12：40~13：00"][x] for x in range(3)} 
mod = {0:"viewform",1:"formResponse"}
google_form_url = "https://docs.google.com/forms/d/e/1FAIpQLSduTOf9rGZfdpD-sH48U0WPO9_E4NphUbhzGYrXaWF4YowX1Q/"

學號 = "01"
姓名 = "OOO"
時段 = 時間表[(time.localtime().tm_hour>>2)-2] #0:上午,1:中午,2:下午
模式 = mod[1] #0: 需手動確認, 1:自動送出表單

CH_year = time.localtime().tm_year-1911
month = str(time.localtime().tm_mon) if time.localtime().tm_mon>9 else "0"+str(time.localtime().tm_mon)
day = str(time.localtime().tm_mday) if time.localtime().tm_mday>9 else "0"+str(time.localtime().tm_mday)
day_of_the_week = time.localtime().tm_wday
english_to_chinese_of_day_of_the_week = {x: "一二三四五六日"[x] for x in range(7)}
chinese_day_of_the_week = english_to_chinese_of_day_of_the_week[day_of_the_week]
date = "{}/{}/{}({})".format(CH_year,month,day,chinese_day_of_the_week)
日期 = date #自動取得

url = "{}{}?entry.2117531125={}&entry.189010056={}&entry.618826090={}&entry.398016007={}".format(google_form_url,模式,學號,姓名,時段,日期)
driver = webdriver.Chrome("C:/Users/water/Documents/codes/py/chromedriver.exe")
driver.get(url)  # 連線到google表單
time.sleep(10)
driver.close()
raise SystemExit("successful")
