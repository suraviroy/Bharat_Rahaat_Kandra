const Agencies = require("../model/agenciesSchema.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
//const jwt=require("jsonwebtoken");
// ({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
//     guardianRelation,storU,storP,lat,lon,imageC,imageP})

const registration = async (req, res) => {

  //console.log(req.body)
  try {
    const doctorName = req.body.doctorName;
    const name = req.body.name;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const nagency = req.body.nagency;
    const idNumber = req.body.idNumber;
    const aadharNumber = req.body.aadharNumber;
    const pin = req.body.pin;
    const address = req.body.address;
    const guardianName = req.body.guardianName;
    const guardianRelation = req.body.guardianRelation;
    const storU = req.body.storU;
    const storP = req.body.storP;
    const lat = req.body.lat;
    const lon = req.body.lon;
    const imageC = req.body.imageC;
    const imageP = req.body.imageP;
    const state= req.body.state;
    const statuss=req.body.statuss;
    //   //const finduser = await Student.findOne({ studentid: studentid });

    const newuser = await Agencies.create({
      doctorName, name, contactNumber, email, nagency, idNumber, aadharNumber, pin, address, guardianName,
      guardianRelation, storU, storP, lat, lon, imageC, imageP,state,statuss
    });
    //   //console.log(req.body);
    console.log(newuser)
    //   //res.json(req.body)
    res.status(200).json({ message: "fetch", data: newuser })
  } catch (error) {
    console.log(error);
  }
}

const login = async (req, res) => {
  const storU = req.body.storU;
  const storP = req.body.storP;
  console.log(req.body);
  // const { storU, storP } = req.body;
  const user = await Agencies.findOne({ storU: storU });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (user) {
    if (storP === user.storP) {
      const token = jwt.sign({ storU: user.storU }, JWT_SECRET);
      // if (res.status(200)) {
      //   return res.json({ status: "ok", data: token });
      // } 
      res.status(200).json({ status: "ok", data: token })
    }
    else {
      return res.json({ error:"Invalid Password"});
    }
  }
  // res.json({ status: "error", error: "InvAlid Password" });
}


const verification=async(req,res)=>{
  //const data2=req.Patient;
  const data1=await Agencies.find({});
    res.send({data : data1})

}
const MapAdmin=async(req,res)=>{
  //const data2=req.Patient;
  const data1=await Agencies.find({});
    res.send({data : data1})

}
// const aganList=async(req,res)=>{
//   //const data2=req.Patient;
//   const finduser = await Student.findOne({ _id: req.query.id });
//   const data1=await Agencies.find({});
//     res.send({data : data1})

// }
const changeStatus=async(req,res)=>{
  const id = req.body.id;
  // const statuss=req.body.statuss;
  const finduser = await Agencies.updateOne({ _id: id },{$set:{statuss:"Verified"}});
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
}
const changeStatusR=async(req,res)=>{
  const id = req.body.id;
  // const statuss=req.body.statuss;
  const finduser = await Agencies.updateOne({ _id: id },{$set:{statuss:"Rejected"}});
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
}

const profile=async(req,res)=>{
  try {
  const data=req.user;
  console.log("profile "+data);
  // const date=new Date();
  const data1=await Agencies.findOne({storU:data.storU});
  console.log(data);
  if(!data1)
  {
      return res.status(404).json({message:"no such user exist"});
  }
  else{
      res.status(200).json(data1);
  }
}catch (error) {
  console.log(error);
}
}
const database=async(req,res) => {
  //console.log('server started')
  
  const storU = req.body.data;
  const resources= req.body.resources;
  const resourceQuantities= req.body.resourceQuantities;
  const shelterOccupancy= req.body.shelterOccupancy;
  const finduser = await Agencies.updateOne({ storU: storU },{resources:resources ,
    resourceQuantities:resourceQuantities,
    shelterOccupancy : shelterOccupancy},
    );
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
}
const database2=async(req,res) => {
  //console.log('server started')
  
  const storU = req.body.data;
  const members= req.body.members;
  const namem= req.body.namem;
  const role= req.body.role;
  const shift= req.body.shift;
  const finduser = await Agencies.updateOne({ storU: storU },{members:members ,
    namem:namem,
    role : role,
    shift : shift},
    );
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
}
const invertory=async(req,res)=>{
  //const data2=req.Patient;
  const data1=await Agencies.find({});
    res.send({data : data1})

}

module.exports = { registration, login,verification ,changeStatus,changeStatusR,MapAdmin,profile,database,database2,invertory};