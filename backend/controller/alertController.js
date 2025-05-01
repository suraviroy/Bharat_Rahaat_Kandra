const Alert = require("../model/alertSchema.js");
const HospitalAlert = require("../model/hospitalAlertSchema.js");
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
    const alertsender = req.body.alertsender;
    const contactNumber = req.body.contactNumber;
    const address = req.body.address;
    const email = req.body.email
    const typeofrequest = req.body.typeofrequest;
    // const  alertsender=data.storU;
    //   //const finduser = await Student.findOne({ studentid: studentid });

    const newuser = await Alert.create({
      lonalert, latalert, time, typeofrequest,
      alertsender, contactNumber, address, email
    });
    //   //console.log(req.body);
    console.log(newuser)
    //   //res.json(req.body)
    res.status(200).json({ message: "fetch", data: newuser })
  } catch (error) {
    console.log(error);
  }
}
const MapAlert = async (req, res) => {
  //const data2=req.Patient;
  const data1 = await Alert.find({});
  res.send({ data: data1 })

}
const notification = async (req, res) => {
  //const data2=req.Patient;
  const data1 = await Alert.find({});
  res.send({ data: data1 })

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
    const alertsender = req.body.alertsender;
    const typeofrequest = req.body.typeofrequest;
    const contactNumber = req.body.contactNumber;
    const address = req.body.address;
    const email = req.body.email;
    // const  alertsender=data.storU;
    //   //const finduser = await Student.findOne({ studentid: studentid });

    const newuser = await Alert.create({
      lonalert, latalert, customResourceType, selectedResourceTypes, time, typeofrequest,
      alertsender, contactNumber, address, email
    });
    //   //console.log(req.body);
    console.log(newuser)
    //   //res.json(req.body)
    res.status(200).json({ message: "fetch", data: newuser })
  } catch (error) {
    console.log(error);
  }
}
const UpdatePeople = async (req, res) => {
  const id = req.params.id;
  const customResourceType = req.body.customResourceType;
  const finduser = await Alert.updateOne({ _id: id }, { $set: { customResourceType: customResourceType } });
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req" })
  }
}

const sendhospitalalert = async (req, res) => {
  try {
    const { alertsender, numberpeople, contactNumber,accidenttype } = req.body;

    const currentDateTime = new Date();

    // Extract and format date
    const date = currentDateTime.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    // Example output: "27/04/2025"

    // Extract and format time
    const time = currentDateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    // Example output: "10:45 AM"

    // Create a new HospitalAlert document
    const newAlert = new HospitalAlert({
      alertsender,
      numberpeople,
      contactNumber,
      accidenttype,
      date,
      time,
    });

    // Save to database
    await newAlert.save();

    res.status(200).json({ message: 'Hospital alert saved successfully' });
  } catch (error) {
    console.error('Error handling hospital alert:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const lasthospitalalert = async (req, res) => {
  try {
    const alerts = await HospitalAlert.find();

    if (alerts.length === 0) {
      return res.status(404).json({ message: 'No hospital alerts found' });
    }

    const lastAlert = alerts[alerts.length - 1]; // Get the last item in the array

    res.status(200).json(lastAlert);
  } catch (error) {
    console.error('Error fetching last hospital alert:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const allhospitalalerts = async (req, res) => {
  try {
    // Fetch all alerts, sorted by date and time
    const allAlerts = await (await HospitalAlert.find()).reverse();

    if (allAlerts.length === 0) {
      return res.status(404).json({ message: 'No hospital alerts found' });
    }

    // Respond with all hospital alerts
    res.status(200).json(allAlerts);
  } catch (error) {
    console.error('Error fetching hospital alerts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { sendalert, MapAlert, notification, foodalert, UpdatePeople, sendhospitalalert,lasthospitalalert,allhospitalalerts };