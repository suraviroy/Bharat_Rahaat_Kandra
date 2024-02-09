import cv2
import face_recognition
import pickle
import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import  storage

# cred = credentials.Certificate("serviceAccountKey.json")
# firebase_admin.initialize_app(cred, {
#     'databaseURL': "https://facedetection-499f1-default-rtdb.firebaseio.com/",
#     'storageBucket': "facedetection-499f1.appspot.com"
# })

path = 'C:/hackathon/SIH/Face Recognition/Images'
images = []
classNames = []
myList = os.listdir(path)
#print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])

    # fileName = f'{path}/{cl}'
    # bucket = storage.bucket()
    # blob = bucket.blob(fileName)
    # blob.upload_from_filename(fileName)
print(classNames)

 
def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

print("Encoding Started ...")
encodeListKnown = findEncodings(images)
encodeListKnownWithIds = [encodeListKnown, classNames]
print("Encoding Complete")
os.chdir("C:/hackathon/SIH/Face Recognition")
file = open("EncodeFile.p", 'wb')
pickle.dump(encodeListKnownWithIds, file)
file.close()
print("File Saved")

# Assuming you have a list of test images with corresponding ground truth labels
# You need to replace [...] with your actual test images and ground truth labels
# test_images = [images]  # List of test images
# ground_truth_labels = [classNames]  # List of ground truth labels corresponding to the test images

# # Encode the test images
# encodeListTest = findEncodings(images)

# # Compare predicted labels with ground truth labels
# predicted_labels = []
# for encodeTest in encodeListTest:
#     # Calculate the distance between the test encoding and all known encodings
#     distances = face_recognition.face_distance(encodeListKnown, encodeTest)
#     # Find the index with the smallest distance
#     min_distance_index = distances.argmin()
#     # Use the index to get the predicted label from classNames
#     predicted_label = classNames[min_distance_index]
#     predicted_labels.append(predicted_label)

# # Calculate accuracy
# correct_predictions = sum(1 for pred, truth in zip(predicted_labels, classNames) if pred == truth)
# total_predictions = len(classNames)
# accuracy = correct_predictions / total_predictions

# print("Accuracy:", accuracy)