'''

import cv2
import numpy as np
from matplotlib import pyplot as plt

# Load the images
before = cv2.imread('before.png')
after = cv2.imread('after.png')
#after = cv2.imread('before.png')

# Resize images to same shape
before = cv2.resize(before, (500, 500))
after = cv2.resize(after, (500, 500))

# Convert to grayscale
before_gray = cv2.cvtColor(before, cv2.COLOR_BGR2GRAY)
after_gray = cv2.cvtColor(after, cv2.COLOR_BGR2GRAY)

# Compute absolute difference
diff = cv2.absdiff(before_gray, after_gray)

# Thresholding to highlight changes
_, thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY)

# Optional: Dilate to enhance visibility
kernel = np.ones((3, 3), np.uint8)
dilated = cv2.dilate(thresh, kernel, iterations=1)

# Count number of changed pixels
changed_pixels = cv2.countNonZero(dilated)

# Define a threshold (tune based on your images)
threshold_pixels = 5000  # You can adjust this value

# Disaster detection decision
if changed_pixels > threshold_pixels:
    print("YES – Disaster detected.")
else:
    print("NO – No significant change.")

# Show results
plt.figure(figsize=(12, 6))
plt.subplot(1, 3, 1), plt.title("Before"), plt.imshow(before[..., ::-1])
plt.subplot(1, 3, 2), plt.title("After"), plt.imshow(after[..., ::-1])
# plt.subplot(1, 3, 3), plt.title("Detected Changes"), plt.imshow(dilated, cmap='gray')
plt.subplot(1, 3, 3)
plt.title("Detected Changes")
plt.imshow(dilated, cmap='gray')

# Display YES or NO on the image
label = "YES" if changed_pixels > threshold_pixels else "NO"
plt.text(10, 30, f'Disaster: {label}', color='red', fontsize=14, weight='bold', bbox=dict(facecolor='white', alpha=0.7))
plt.show()


'''


import cv2
import numpy as np
import tkinter as tk
from tkinter import filedialog
from matplotlib import pyplot as plt
from tkinter import ttk

def select_before_image():
    global before_path
    before_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.png *.jpeg")])
    before_label.config(text=f"Before Image: {before_path.split('/')[-1]}", foreground="blue")

def select_after_image():
    global after_path
    after_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.png *.jpeg")])
    after_label.config(text=f"After Image: {after_path.split('/')[-1]}", foreground="blue")

def process_images():
    if not before_path or not after_path:
        result_label.config(text="⚠️ Please upload both images!", fg="orange")
        return

    before = cv2.imread(before_path)
    after = cv2.imread(after_path)

    before = cv2.resize(before, (500, 500))
    after = cv2.resize(after, (500, 500))

    before_gray = cv2.cvtColor(before, cv2.COLOR_BGR2GRAY)
    after_gray = cv2.cvtColor(after, cv2.COLOR_BGR2GRAY)

    diff = cv2.absdiff(before_gray, after_gray)
    _, thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY)
    kernel = np.ones((3, 3), np.uint8)
    dilated = cv2.dilate(thresh, kernel, iterations=1)

    changed_pixels = cv2.countNonZero(dilated)
    threshold_pixels = 5000
    label = "YES" if changed_pixels > threshold_pixels else "NO"

    result_label.config(
        text=f"🌪️ Disaster Detected: {label}",
        fg="red" if label == "YES" else "green"
    )

    # Show result using matplotlib
    plt.figure(figsize=(12, 6))
    plt.subplot(1, 3, 1)
    plt.title("Before")
    plt.imshow(cv2.cvtColor(before, cv2.COLOR_BGR2RGB))
    
    plt.subplot(1, 3, 2)
    plt.title("After")
    plt.imshow(cv2.cvtColor(after, cv2.COLOR_BGR2RGB))

    plt.subplot(1, 3, 3)
    plt.title("Detected Changes")
    plt.imshow(dilated, cmap='gray')
    plt.text(10, 30, f'Disaster: {label}', color='red', fontsize=14, weight='bold',
             bbox=dict(facecolor='white', alpha=0.7))
    
    plt.tight_layout()
    plt.show()

# GUI Setup
root = tk.Tk()
root.title("🌍 Disaster Detection System")
root.geometry("550x400")
root.configure(bg="#f0f4f8")

# Fonts
TITLE_FONT = ("Helvetica", 18, "bold")
BUTTON_FONT = ("Helvetica", 11)
LABEL_FONT = ("Helvetica", 10)

# Title
title = tk.Label(root, text="Disaster Detection from Images", font=TITLE_FONT, bg="#f0f4f8", fg="#333")
title.pack(pady=10)

# Buttons and Labels
style = ttk.Style()
style.configure('TButton', font=BUTTON_FONT, padding=6)

ttk.Button(root, text="Upload Before Image", command=select_before_image).pack(pady=5)
before_label = tk.Label(root, text="No before image selected", font=LABEL_FONT, bg="#f0f4f8")
before_label.pack()

ttk.Button(root, text="Upload After Image", command=select_after_image).pack(pady=10)
after_label = tk.Label(root, text="No after image selected", font=LABEL_FONT, bg="#f0f4f8")
after_label.pack()

ttk.Button(root, text="🔍 Check for Disaster", command=process_images).pack(pady=15)

result_label = tk.Label(root, text="", font=("Helvetica", 14, "bold"), bg="#f0f4f8")
result_label.pack(pady=10)

# Global path variables
before_path = ""
after_path = ""

root.mainloop()
