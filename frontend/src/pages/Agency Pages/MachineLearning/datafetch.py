import pymongo
import requests
import os
from datetime import datetime
import holidays


if __name__ == "__main__":
    print("Welcome")
    client = pymongo.MongoClient("mongodb+srv://rsuravi447:PtCLVT7Q0Xuk3khG@cluster1.wgel2hb.mongodb.net/Disaster?retryWrites=true&w=majority")
    db = client.get_database("Disaster")
    agencies_collection = db.get_collection("agencies")
    # new_agency = {
    # "name": "Example Agency",
    # "location": "Example Location",
    # "contact": "example@example.com"
    # }
    # agencies_collection.insert_one(new_agency)
    coordinates = []
    projection = {"name": 1, "lon": 1, "lat": 1, "storU":1, "_id": 0}
    cursor = agencies_collection.find({}, projection)
    for document in cursor:
        coordinates.append({
            "name": document["name"],
            "username": document["storU"],
            "longitude": document["lat"],
            "latitude": document["lon"]
        })
    print(coordinates)


    alert_collection = db.get_collection("alerts")

    last_document = alert_collection.find_one(sort=[("_id", pymongo.DESCENDING)])
    if last_document:
        last_name = last_document["alertsender"]
        last_longitude = last_document.get("lonalert")
        last_latitude = last_document.get("latalert")
        #print("Last Data Name:", last_document["alertsender"])
        last_data = {
            "name": last_name,
            "longitude": last_longitude,
            "latitude": last_latitude
        }
    else:
        last_data={}
        print("The 'agencies' collection is empty.")

    # last_data = {
    #         "name": last_name,
    #         "longitude": last_longitude,
    #         "latitude": last_latitude
    #     }
    print("Last Data:", last_data)

    

    user_api = "fdbc8de9d49a84e025143092a5c8ae9e"

    latitude = last_data['latitude']
    longitude = last_data['longitude']
    #complete_api_link = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+user_api
    complete_api_link = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={user_api}"
    api_link = requests.get(complete_api_link)
   
    #print(api_data)
    if api_link.status_code == 200:
        api_data = api_link.json()
        temp_city = ((api_data['main']['temp']) - 273.15)
        city_name = api_data['name']
        temperature = api_data['main']['temp']
        weather_desc = api_data['weather'][0]['description']

        print(f"City: {city_name}")
        print(f"Temperature: {temperature} K")
        print("Current temperature is: {:.2f} deg C".format(temp_city))
        print("Current weather desc :",weather_desc)
    else:
        print(f"Error: Unable to fetch data. Status code: {api_link.status_code}")
   
  

    country_code = 'India'  

    us_holidays = holidays.CountryHoliday(country_code)

    date_to_check = datetime.now().strftime('%Y-%m-%d')  

    if date_to_check in us_holidays:
        holiday_name = us_holidays.get(date_to_check)
        print(f"{date_to_check} is a {holiday_name} in {country_code}")
    else:
        print(f"{date_to_check} is not a holiday or festival in {country_code}")