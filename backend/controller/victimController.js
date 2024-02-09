const Victim = require("../model/victimSchema.js");

const missingpeople = async (req, res) => {

    try {
      const name = req.body.name;
      const email = req.body.email;
      const image = req.body.image;
      const phNumber = req.body.phNumber;
      const adharNumber = req.body.adharNumber;
      const age = req.body.age;
      const address = req.body.address;
      const gender = req.body.gender;
      const category = req.body.category;
    
         //const finduser = await Student.findOne({ studentid: studentid });
  
      const newuser = await Victim.create({
         name, adharNumber,email,image,phNumber,age,address,gender,category
      });
      //   //console.log(req.body);
      console.log(newuser)
      //   //res.json(req.body)
      res.status(200).json({ message: "fetch", data: newuser })
    } catch (error) {
      console.log(error);
    }
  }
  const affectpeople = async (req, res) => {

    try {
      const victims = await Victim.find({ category: "victim" });
      //console.log(victims)
      res.status(200).json(victims);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  module.exports = {missingpeople,affectpeople};