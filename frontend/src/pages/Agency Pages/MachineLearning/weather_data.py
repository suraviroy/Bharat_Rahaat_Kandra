# import requests
# import os
# from datetime import datetime
# user_api = "fdbc8de9d49a84e025143092a5c8ae9e"
# lat1 = "22.5902592"
# lon1 = "88.3163136"
# location = "lat:"+lat1+"long:"+lon1
# complete_api_link = f"https://api.openweathermap.org/data/2.5/weather?lat={lat1}&lon={lon1}&appid={user_api}"
# api_link = requests.get(complete_api_link)
# api_data = api_link.json()
# # temp_city = ((api_data['main']['temp']) - 273.15)
# weather_desc = api_data['weather'][0]['description']
# # hmdt = api_data['main']['humidity']
# # wind_spd = api_data['wind']['speed']
# date_time = datetime.now().strftime("%d %b %Y | %I: %M %S %p")
# print ("-------------------------------------------")
# print ("Weather stats for -{} || {}".format(location,date_time))
# # print("Current temperature is: {:.2f} deg C".format(temp_city))
# print("Current weather desc :",weather_desc)
# # print("Current humidity :",hmdt, '%')
# # print("Current wind speed :",wind_spd, 'kmph')

# import requests

# # Define the coordinates or location for which you want to determine urban/metropolitan status
# latitude = 22.6437632
# longitude = 88.4238381

# # Make a request to the Census Bureau's API (example for the United States)
# census_api_url = f"https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x={longitude}&y={latitude}&benchmark=4&vintage=4&format=json"
# response = requests.get(census_api_url)

# if response.status_code == 200:
#     data = response.json()
    
#     # Extract classification information (if available)
#     classification_info = data.get('result', {}).get('geographies', {}).get('Census Tracts', [{}])[0].get('CLASSFP', None)
    
#     if classification_info is not None:
#         if classification_info in ['S', 'C']:
#             print("Urban Area")
#         elif classification_info == 'M':
#             print("Metropolitan Area")
#         else:
#             print("Unknown Area Type")
#     else:
#         print("Area classification information not available.")
# else:
#     print("Failed to fetch data. Status code:", response.status_code)


from keras.models import Sequential
from keras.layers import LSTM, Dense
import numpy as np

# Create a model with the same architecture as during training
model = Sequential()
model.add(LSTM(128, return_sequences=True, input_shape=(3, 1)))
model.add(LSTM(64, return_sequences=False))
model.add(Dense(25))
model.add(Dense(1))

# Load the model weights from the file
model.load_weights("model_weights.h5")

# Prepare the input data for prediction
input_data = np.array([[21, 4.6, 11]])  # Adjust these values accordingly

# Reshape the input data to match the LSTM model's input shape
input_data = input_data.reshape(1, input_data.shape[0], 1)

# Make predictions
predictions = model.predict(input_data)
print("Predicted Delivery Time:", predictions)


