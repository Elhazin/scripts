import requests


base_url = 'https://api.openweathermap.org/data/2.5/weather?'
cityname  = 'Ait Ourir'

token = '30d4741c779ba94c470ca1f63045390a'

url = base_url + "appid=" + token + "&q=" + cityname

reso = requests.get(url).json()['main']['temp']
temp = reso - 273.15



print(temp)

