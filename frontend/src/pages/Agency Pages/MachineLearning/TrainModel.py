import pandas as pd
import numpy as np
import plotly.express as px
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, LSTM
import pickle

data = pd.read_csv("C:/hackathon/SIH/frontend/src/pages/Agency Pages/MachineLearning/TrainingData.csv")

print(data.head())
data.info()
print(data.isnull().sum())

R = 6371

def deg_to_rad(degrees):
    return degrees*(np.pi/180)

def dist(lat1, lon1, lat2, lon2):
    d_lat = deg_to_rad(lat2-lat1)
    d_lon = deg_to_rad(lon2-lon1)
    a = np.sin(d_lat/2)**2 + np.cos(deg_to_rad(lat1)) * np.cos(deg_to_rad(lat2)) * np.sin(d_lon/2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1-a))
    return R * c

for i in range(len(data)):
    data.loc[i,'distance'] = dist(data.loc[i, 'Restaurant_latitude'],
                                        data.loc[i, 'Restaurant_longitude'],
                                        data.loc[i, 'Delivery_location_latitude'],
                                        data.loc[i, 'Delivery_location_longitude'])
    
print(data.head())


# Save the updated DataFrame to the same CSV file
#data.to_csv('TrainingData.csv', index=False)

x = np.array(data[["Delivery_person_Age",
                   "Delivery_person_Ratings",
                   "distance"]])

y = np.array(data[["Time_taken(min)"]])

xtrain, xtest, ytrain,ytest = train_test_split(x,y,test_size=0.10,random_state=42)

model = Sequential()
model.add(LSTM(128, return_sequences=True, input_shape= (xtrain.shape[1], 1)))
model.add(LSTM(64, return_sequences=False))
model.add(Dense(25))
model.add(Dense(1))
model.summary()

model.compile(optimizer='adam',loss='mean_squared_error')
encordings=model.fit(xtrain,ytrain,batch_size=1, epochs=2)
#model.save_weights("model_weights.h5")
# with open('lstm_model.pkl', 'wb') as model_file:
#     pickle.dump(model, model_file)

# # Load the trained LSTM model from the pickle file
# with open('lstm_model.pkl', 'rb') as model_file:
#     loaded_model = pickle.load(model_file)

# # If needed, you can compile the loaded model
# loaded_model.compile(optimizer='adam', loss='mean_squared_error')

file_path = "C:/hackathon/SIH/frontend/src/pages/Agency Pages/MachineLearning/EncodeFile.p"
file = open(file_path , 'wb')
pickle.dump(encordings, file)
file.close()
print("File Saved")

# model.predict(21,4.6,11)
# print(model.predict(21,4.6,11))



