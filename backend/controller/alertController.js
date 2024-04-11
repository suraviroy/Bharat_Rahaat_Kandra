const Alert = require("../model/alertSchema.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// const setAlert=async(req,res)=>{
//     try {
//     const data=req.user;
//     console.log("profile "+data);
//     const date=new Date();
//     //const data1=await Agencies.findOne({storU:data.storU});
//     console.log(data);
//     if(!data1)
//     {
//         return res.status(404).json({message:"no such user exist"});
//     }
//     else{
//         res.status(200).json(data1);
//     }
//   }catch (error) {
//     console.log(error);
//   }
//   }
const sendalert = async (req, res) => {

    //console.log(req.body)
    try {
      //  const data=req.user;
       //console.log("profile"+data)
      const lonalert = req.body.lonalert;
      const latalert = req.body.latalert;
      const time = req.body.time;
      const alertsender=req.body.alertsender;
      const contactNumber=req.body.contactNumber;
      const address=req.body.address;
      const email=req.body.email
      const typeofrequest=req.body.typeofrequest;
     // const  alertsender=data.storU;
      //   //const finduser = await Student.findOne({ studentid: studentid });
  
      const newuser = await Alert.create({
        lonalert,latalert,time,typeofrequest,
        alertsender,contactNumber,address,email
      });
      //   //console.log(req.body);
      console.log(newuser)
      //   //res.json(req.body)
      res.status(200).json({ message: "fetch", data: newuser })
    } catch (error) {
      console.log(error);
    }
  }
  const MapAlert=async(req,res)=>{
    //const data2=req.Patient;
    const data1=await Alert.find({});
      res.send({data : data1})
  
  }
  const notification=async(req,res)=>{
    //const data2=req.Patient;
    const data1=await Alert.find({});
      res.send({data : data1})
  
  }
  const foodalert = async (req, res) => {

    //console.log(req.body)
    try {
      //  const data=req.user;
       //console.log("profile"+data)
      const customResourceType = req.body.customResourceType;
      const selectedResourceTypes = req.body.selectedResourceTypes;
      const time = req.body.time;
      const lonalert = req.body.lonalert;
      const latalert = req.body.latalert;
      const alertsender=req.body.alertsender;
      const typeofrequest=req.body.typeofrequest;
      const contactNumber=req.body.contactNumber;
      const address=req.body.address;
      const email=req.body.email;
     // const  alertsender=data.storU;
      //   //const finduser = await Student.findOne({ studentid: studentid });
  
      const newuser = await Alert.create({
        lonalert,latalert,customResourceType,selectedResourceTypes,time,typeofrequest,
        alertsender,contactNumber,address,email
      });
      //   //console.log(req.body);
      console.log(newuser)
      //   //res.json(req.body)
      res.status(200).json({ message: "fetch", data: newuser })
    } catch (error) {
      console.log(error);
    }
  }
  const UpdatePeople=async(req,res)=>{
    const id = req.params.id; 
    const customResourceType = req.body.customResourceType;
    const finduser = await Alert.updateOne({ _id: id },{$set:{customResourceType: customResourceType}});
    if (finduser) {
      return res.status(200).json({ message: "updated" });
    }
    else {
  
      res.status(400).json({ message: "bad req"})
    }
  }
module.exports = {sendalert,MapAlert,notification,foodalert,UpdatePeople};