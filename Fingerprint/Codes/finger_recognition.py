import cv2
import os
import tkinter as tk
from tkinter import *
from PIL import ImageTk, Image
from findRecords import record1




def notFound():
    # window = tk.Tk()
    # window.title("Not Recognised")

    # image_path = "C:/hackathon/Machine Learning/Face Recgnition/Resources/not.png"
    # image = Image.open(image_path)
    # #image = image.resize((300, 300), Image.ANTIALIAS)  # Resize the image if necessary

    # tk_image = ImageTk.PhotoImage(image)

    # label = tk.Label(window, image=tk_image)
    # label.pack(padx=10, pady=10)
   

    # # Run the Tkinter event loop
    # window.mainloop()
    root=Tk()
    root.title('Match Not Found')
    root.geometry("500x200")
    label = Label(root, text = "MATCH NOT FOUND", fg = "Red",font=("times new roman",20, "bold"))  
    label.place(x=100, y=70) 
    mainloop()


def preprocess_image(image_path):
    # Read the image
    img = cv2.imread(image_path)
    # Resize the image to a standard size
    img = cv2.resize(img, (300, 300))
    # Convert the image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return gray

def enhance_image(image):
    # Apply image processing techniques to enhance fingerprint quality
    # Example: You can apply filters, adjust brightness/contrast, etc.
    # Here, we'll just return the original image for simplicity
    return image

def extract_features(image):
    # Create SIFT detector
    sift = cv2.SIFT_create()
    # Detect keypoints and compute descriptors
    keypoints, descriptors = sift.detectAndCompute(image, None)
    return keypoints, descriptors

def match_features(descriptors1, descriptors2):
    # Create FLANN matcher
    matcher = cv2.FlannBasedMatcher(dict(algorithm=1, trees=10), dict())
    # Perform KNN match
    matches = matcher.knnMatch(descriptors1, descriptors2, k=2)
    # Apply ratio test to select good matches
    good_matches = []
    for m, n in matches:
        if m.distance < 0.81 * n.distance:
            good_matches.append(m)
    return good_matches

def calculate_accuracy(good_matches, keypoints1, keypoints2):
    accuracy = (len(good_matches) / min(len(keypoints1), len(keypoints2))) * 100
    return min(accuracy, 100)  # Ensure accuracy is within 100%

def finger_recognition(test_image):
    # Load dataset of fingerprint images
    dataset_folder = 'C:/hackathon/SIH/Fingerprint/dataset/FingerPrints'
    dataset_images = []
    dataset_descriptors = []
    dataset_filenames = []  # List to store filenames
    for file in os.listdir(dataset_folder):
        image_path = os.path.join(dataset_folder, file)
        img = preprocess_image(image_path)
        # img = enhance_image(img)  # Enhance image quality
        dataset_images.append(img)
        keypoints, descriptors = extract_features(img)
        dataset_descriptors.append(descriptors)
        dataset_filenames.append(file)  # Store filename

    # Load test image
    test_image_path = test_image
    test_img = preprocess_image(test_image_path)
    test_img = enhance_image(test_img)  # Enhance image quality
    test_keypoints, test_descriptors = extract_features(test_img)

    best_match_accuracy = 0
    best_match_index = -1

    # Match features between test image and dataset images
    for i, descriptor in enumerate(dataset_descriptors):
        good_matches = match_features(descriptor, test_descriptors)
        accuracy = calculate_accuracy(good_matches, test_keypoints, dataset_images[i])
        if accuracy > best_match_accuracy:
            best_match_accuracy = accuracy
            best_match_index = i

    # Display best matching fingerprint and accuracy
    if best_match_index != -1 and best_match_accuracy > 38:
        best_match_image = dataset_images[best_match_index]
        best_match_filename = dataset_filenames[best_match_index]  # Get filename
        print("Fingerprint recognized with filename:", best_match_filename)  # Print filename
        print("Accuracy:", best_match_accuracy)

        split_name = best_match_filename.split("_")
        full_name = split_name[0]
        print("Full Name:", full_name)
        
        record1(full_name,best_match_accuracy)
        # cv2.putText(best_match_image, f"Accuracy: {best_match_accuracy:.2f}%", (10, 30),
        #             cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
        # image_path = f"C:/hackathon/SIH/Face Recognition/Images/{full_name}.png"
        # cv2.imshow("Best Matching Fingerprint", image_path)
        # cv2.waitKey(0)
        # cv2.destroyAllWindows()

    else:
        print("Fingerprint not recognized.")
        notFound()

# if __name__ == "__main__":
#     # folder_path = ('C:/Users/sih/Fingerprint/dataset/train')
#     # test_image = ('C:/Users/sih/Fingerprint/dataset/test2/papa_test.bmp')
#     # finger_recognition(test_image)
#     notFound()

