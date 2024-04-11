# # Import necessary libraries
# import os
# import cv2
# import matplotlib.pyplot as plt
# from findRecords import record1


# def recognise(img):
#     # Define the path to the sample fingerprint image
#     # sample_path = "C:\\Users\\fingerprint\\SOCOFing\\Altered\\Altered-Hard\\4__M_Left_index_finger_CR.BMP"

#     # sample_path = "C:/hackathon/SIH/Fingerprint/dataset/test/right_Tiasha.BMP"

#     # sample_path = "C:\\Users\\fingerprint\\SOCOFing\\Altered\\Altered-Medium\\4__M_Right_middle_finger_Obl.BMP"
#     sample_path = img
#     sample = cv2.imread(sample_path)

#     # Initialize variables to store the best matching result
#     best_score = 0
#     best_filename = None
#     best_image = None
#     best_kp1 = None
#     best_kp2 = None
#     best_mp = None

#     # Define the directory containing real fingerprint images
#     # real_images_dir = "C:\\Users\\fingerprint\\SOCOFing\\Real"
#     real_images_dir = "C:/hackathon/SIH/Fingerprint/dataset/FingerPrints"

#     # Loop through each real fingerprint image in the directory
#     for counter, file in enumerate(os.listdir(real_images_dir)):
#         if counter % 10 == 0:
#             print("Processing image", counter)

#         fingerprint_path = os.path.join(real_images_dir, file)
#         fingerprint_img = cv2.imread(fingerprint_path)

#         # Check if the image could not be loaded
#         if fingerprint_img is None:
#             print("Error loading:", fingerprint_path)
#             continue

#         # Create a SIFT detector
#         sift = cv2.SIFT_create()

#         # Detect keypoints and compute descriptors for the sample and real fingerprint images
#         keypoints_1, des1 = sift.detectAndCompute(sample, None)
#         keypoints_2, des2 = sift.detectAndCompute(fingerprint_img, None)

#         # Check if keypoint detection failed for either image
#         if keypoints_1 is None or keypoints_2 is None:
#             print("Keypoint detection failed for", fingerprint_path)
#             continue

#         # Create a FLANN-based matcher for keypoint matching
#         matcher = cv2.FlannBasedMatcher({"algorithm": 1, "trees": 10}, {})
#         matches = matcher.knnMatch(des1, des2, k=2)

#         # Filter good matches based on Lowe's ratio test
#         match_points = [p for p, q in matches if p.distance < 0.1 * q.distance]

#         # Calculate a matching score as the ratio of good matches to total keypoints
#         keypoints = min(len(keypoints_1), len(keypoints_2))
#         score = len(match_points) / keypoints * 100

#         if score > best_score:
#             best_score = score
#             best_filename = file
#             best_image = fingerprint_img
#             best_kp1, best_kp2, best_mp = keypoints_1, keypoints_2, match_points

#     # Print the best match filename and score
#     print("Best match:", best_filename)
#     print("Best score:", best_score)


#     # Display the best match result if it exists
#     if best_mp:
#         result = cv2.drawMatches(sample, best_kp1, best_image, best_kp2, best_mp, None)
#         result = cv2.resize(result, None, fx=5, fy=5)
#         image = cv2.cvtColor(result, cv2.COLOR_BGR2RGB)
#         personName = os.path.splitext(best_filename)[0]
#         print("Best match:", personName)
#         record1(personName)
#         # plt.imshow(image)
#         # plt.title("Best Match")
#         # plt.axis("off")
#         # plt.show()

#     # Optionally, you can save the best match result as an image
#     # if best_filename:
#     #     cv2.imwrite("best_match_result.jpg", best_image)
        
#-------------------------------------------------------------------------------------------

# import cv2
# import os
# from findRecords import record1

# def recognise(dataset_folder, test_image_path):
#     # Initialize ORB detector
#     orb = cv2.ORB_create()

#     # Read the test image
#     test_image = cv2.imread(test_image_path, cv2.IMREAD_GRAYSCALE)

#     # Detect keypoints and compute descriptors for the test image
#     keypoints_1, descriptors_1 = orb.detectAndCompute(test_image, None)

#     # Initialize variables to store the best matching result
#     best_score = 0
#     best_match = None

#     # Loop through each fingerprint image in the dataset folder
#     for filename in os.listdir(dataset_folder):
#         # Read the dataset fingerprint image
#         dataset_image_path = os.path.join(dataset_folder, filename)
#         dataset_image = cv2.imread(dataset_image_path, cv2.IMREAD_GRAYSCALE)

#         # Detect keypoints and compute descriptors for the dataset fingerprint image
#         keypoints_2, descriptors_2 = orb.detectAndCompute(dataset_image, None)

#         # Perform matching between test and dataset descriptors
#         bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
#         matches = bf.match(descriptors_1, descriptors_2)

#         # Calculate matching score
#         score = len(matches)

#         # Update best score and match if current score is higher
#         if score > best_score:
#             best_score = score
#             best_match = filename

#     if best_match is not None:
#         print("Best match:", best_match)
#         print("Matching score:", best_score)
#         personName = os.path.splitext(best_match)[0]
#         record1(personName)
#     else:
#         print("No match found in the dataset")

# # Example usage
# # dataset_folder = "./SOCOFing/SOCOFing/Real"
# # test_image_path = "./SOCOFing/SOCOFing/Real/100__M_Left_index_finger.BMP"
# # recognize_fingerprint(dataset_folder, test_image_path)


#--------------------------------------------------------------------------------

# import cv2
# import os

# def recognise(dataset_folder, test_image_path):
#     # Initialize ORB detector
#     orb = cv2.ORB_create()

#     # Read the test image
#     test_image = cv2.imread(test_image_path, cv2.IMREAD_GRAYSCALE)

#     # Detect keypoints and compute descriptors for the test image
#     keypoints_1, descriptors_1 = orb.detectAndCompute(test_image, None)

#     # Initialize variables to store the best matching result
#     best_score = 0
#     best_match = None

#     # Loop through each fingerprint image in the dataset folder
#     for filename in os.listdir(dataset_folder):
#         # Read the dataset fingerprint image
#         dataset_image_path = os.path.join(dataset_folder, filename)
#         dataset_image = cv2.imread(dataset_image_path, cv2.IMREAD_GRAYSCALE)

#         # Detect keypoints and compute descriptors for the dataset fingerprint image
#         keypoints_2, descriptors_2 = orb.detectAndCompute(dataset_image, None)

#         # Perform matching between test and dataset descriptors
#         bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
#         matches = bf.match(descriptors_1, descriptors_2)

#         # Calculate matching score as a percentage
#         match_score = len(matches) / max(len(keypoints_1), len(keypoints_2)) * 100

#         # Update best score and match if current score is higher
#         if match_score > best_score:
#             best_score = match_score
#             best_match = filename

#     if best_match is not None:
#         print("Best match:", best_match)
#         print("Matching score: {:.2f}%".format(best_score))
#     else:
#         print("No match found in the dataset")

# Example usage
