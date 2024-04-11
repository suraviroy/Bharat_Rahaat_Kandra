import subprocess
import tkinter as tk
import os
import shutil
import cv2
import numpy as np
from finger_recognition import finger_recognition



def Open_biometric():
    file_path = 'C:/Program Files/Mantra/MFS100/Driver/MFS100Test/MANTRA.MFS100.Test'
    try:
        subprocess.Popen(file_path, shell=True)
        print("File executed successfully")
    except Exception as e:
        print(f"Error executing file: {e}")


def click_save_picture():
    image_path = 'C:/Program Files/Mantra/MFS100/Driver/MFS100Test/FingerData/FingerImage.bmp'
    if os.path.exists(image_path):

        # save_folder = 'C:/hackathon/SIH/Fingerprint/dataset/test'
        save_folder = 'C:/hackathon/SIH/Fingerprint/dataset/test'
        shutil.copy(image_path, save_folder)
        img = cv2.imread(os.path.join(save_folder, 'FingerImage.bmp'))
        # x, y, w, h = 50, 20, 200, 200  # Define the region to crop (x, y, width, height)
        # cropped_img = img[y:y+h, x:x+w]
        # alpha = 1.1  # Brightness control (1.0-3.0)
        # beta = 0    # Contrast control (0-100)
        # brightened_img = cv2.convertScaleAbs(cropped_img, alpha=alpha, beta=beta)
        # kernel_sharpening = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]])  # Sharpening kernel
        # sharpened_img = cv2.filter2D(brightened_img, -1, kernel_sharpening)

       # gray_img = cv2.cvtColor(sharpened_img, cv2.COLOR_BGR2GRAY)
        
        # resized_img = cv2.resize(sharpened_img, (96, 103))

        processed_img_path = os.path.join(save_folder, 'img.bmp')
        cv2.imwrite(processed_img_path, img)

        print("Image saved successfully.")
    else:
        print("Screenshot file does not exist.")
   
    # recognise('../dataset/test2/img.bmp')
    #recognise('C:/hackathon/SIH/Fingerprint/dataset/test/right_Tiasha.BMP')
    finger_recognition('C:/hackathon/SIH/Fingerprint/dataset/test/img.bmp')     
     

    
def main():
    root = tk.Tk()
    root.title("Take Fingerprint")
    window_width = 433
    window_height = 80

    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()
    x_position = ((screen_width - window_width) // 2 ) - 10
    y_position = screen_height - window_height - 145 

    root.geometry(f"{window_width}x{window_height}+{x_position}+{y_position}")
    root.configure(bg="blue")
    
    screenshot_button = tk.Button(root, text="Find Match",command=click_save_picture)
    screenshot_button.pack(pady=20)

    Open_biometric()

    root.mainloop()

if __name__ == "__main__":
    main()
