from collections import defaultdict
from tkinter import messagebox
from tkinter import *
from tkinter import ttk
from PIL import Image
import subprocess as sp
import numpy as np
import os
import re
import io
# import cloudinary
# import cloudinary.uploader
import datetime
import pymongo
import base64
import tkinter as tk


print("Welcome")
client = pymongo.MongoClient("mongodb+srv://rsuravi447:PtCLVT7Q0Xuk3khG@cluster1.wgel2hb.mongodb.net/Disaster?retryWrites=true&w=majority")
db = client.get_database("Disaster")
agencies_collection = db.get_collection("victims")

# def sentInfo(name3):
#     file_pic='C:/hackathon/SIH/Face Recognition/Images/'+name3+'.png'
#     with open (file_pic,'rb') as img:
#         encoder_str=base64.b64encode(img.read())
#         final_str=encoder_str.decode('utf-8')
#         print(final_str)


#     # chunk_size = 95436  # You can adjust this value based on your needs

#     # with open(file_pic, 'rb') as img:
#     #     encoder_str = ''
#     #     while True:
#     #         chunk = img.read(chunk_size)
#     #         if not chunk:
#     #             break
#     #         encoder_str += base64.b64encode(chunk).decode('utf-8')
#             #print("Read {} bytes, total: {}".format(len(chunk), len(encoder_str)))

#     #print(encoder_str)
#     #print("Final length of encoded string:", len(encoder_str))
#     # b=base64.b64decode(final_str)
#     # img=Image.open(io.BytesIO(b))
#     # img.show()
#     #print(img.size)
    
#     file_path='C:/hackathon/SIH/Face Recognition/Details/'+name3+'/'+name3+'.txt'
#     file=open(file_path,"r")
#     lines=file.readlines()
#     file.close()
#     # for line in lines:
#     #     print(line.strip())

#     pattern = re.compile(r'(?<=- ).*')
#     matches = [pattern.findall(line.strip())[0] for line in lines if pattern.findall(line.strip())]
    
#     # for match in matches:
#     #     print(match)
#    # print("*********************")
#     # print(matches[1])
#     adharNumber=matches[0]
#     address=matches[1]
#     state=matches[2]
#     phNumber=matches[3]
#     alPhNumber=matches[4]
#     dob=matches[5]
#     age=matches[6]
#     gender=matches[7]
#     fatherName=matches[8]
#     motherName=matches[9]
#     email=matches[10]
#     name=name3
#     image=final_str
#     #print(gender)

#     victim_data = {
#         "name": name,
#         "adharNumber": adharNumber,
#         "address": address,
#         "state": state,
#         "phNumber": phNumber,
#         "alPhNumber": alPhNumber,
#         "dob": dob,
#         "age": age,
#         "gender": gender,
#         "fatherName": fatherName,
#         "motherName": motherName,
#         "email": email,
#         "image": image,
#         "category": "victim"
#     }
#     print("sending")
#     agencies_collection.insert_one(victim_data)
#     print("sent")
#     messagebox.showinfo("Send Information", "Victim Information has been send to government")

#     mainloop()





def insert_data(name3, loading_window):
    file_pic = 'C:/hackathon/SIH/Face Recognition/Images/' + name3 + '.png'
    with open(file_pic, 'rb') as img:
        encoder_str = base64.b64encode(img.read())
        final_str = encoder_str.decode('utf-8')

    file_path = 'C:/hackathon/SIH/Face Recognition/Details/' + name3 + '/' + name3 + '.txt'
    with open(file_path, "r") as file:
        lines = file.readlines()

    pattern = re.compile(r'(?<=- ).*')
    matches = [pattern.findall(line.strip())[0] for line in lines if pattern.findall(line.strip())]

    adharNumber = matches[0]
    address = matches[1]
    state = matches[2]
    phNumber = matches[3]
    alPhNumber = matches[4]
    dob = matches[5]
    age = matches[6]
    gender = matches[7]
    fatherName = matches[8]
    motherName = matches[9]
    email = matches[10]
    current_datetime = datetime.datetime.now()

    current_date = current_datetime.date()
    current_time = current_datetime.time()


    formatted_date = current_date.strftime("%d-%m-%Y")
    formatted_time = current_time.strftime("%H:%M:%S")

    victim_data = {
        "name": name3,
        "adharNumber": int(adharNumber),
        "address": address,
        "state": state,
        "phNumber": phNumber,
        "alPhNumber": alPhNumber,
        "dob": dob,
        "age": age,
        "gender": gender,
        "fatherName": fatherName,
        "motherName": motherName,
        "email": email,
        "image": "data:image/png;base64,"+final_str,
        "category": "victim",
        "Pdate": formatted_date,
        "Ptime": formatted_time
    }

    print("sending")
    loading_window.update_idletasks()
    loading_window.label.config(text="Sending victim information, please wait...")

    agencies_collection.insert_one(victim_data)

    print("sent")
    messagebox.showinfo("Send Information", "Victim Information has been sent to the government")
    
    loading_window.after(2000, loading_window.destroy)

def show_loading():
    loading_window = tk.Toplevel()
    loading_window.title("Sending Information Please Wait.........")
    loading_label = tk.Label(loading_window, text="Sending victim information, please wait...")
    loading_label.pack()
    loading_window.label = loading_label
    return loading_window



def record1(name):
    
    root=Tk()
    root.title('Details')
    root.geometry("1000x550")
    bg = PhotoImage(file = 'C:/hackathon/SIH/Face Recognition/Resources/detail.png')
    label1 = Label(root, image = bg)
    label1.place(x = 0, y = 0)
    

    filee='C:/hackathon/SIH/Face Recognition/Images/'+name+'.png'
    bg3 = PhotoImage(file = filee)
    label4 = Label(root, image = bg3,highlightbackground="#33CCFF", highlightthickness=5)
    label4.place(x = 25, y = 70)
    label = Label(root, text = name, fg = "Red",font=("times new roman",20, "bold"))  
    label.place(x=50, y=330) 

    Label(root, text="General Information:", font=("times new roman", 16), fg="black").place(x=305, y=25)
    
    b=Button(root, text="Send Info", font=("times new roman",15), fg="red",cursor="hand2")
    b.bind("<Button>",
        lambda e: sentInfo(name))
    b.place(x=70, y=435)
    

    fileName1 = 'C:/hackathon/SIH/Face Recognition/Details/'+name+'/'+name+'.txt'
    txt_file=open(fileName1,'r')
    stuff=txt_file.read()
    my_txt=Text(root,width=50 ,height=15 ,font=("times new roman",18),highlightbackground="#33CCFF", highlightthickness=6)
    my_txt.place(x=290,y=75)
    my_txt.insert(END,stuff)
    my_txt.config(state=DISABLED)
    mainloop()

#record1("Suravi Roy")
    
def sentInfo(name3):
    loading_window = show_loading()
    insert_data(name3, loading_window)

# Example usage
record1("Suravi Roy")