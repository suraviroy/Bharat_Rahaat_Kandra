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
    const Pdate = req.body.Pdate;
    const Ptime = req.body.Ptime;

    const finduser = await Victim.findOne({ adharNumber: adharNumber });
    if (finduser) {
      console.log("user exist")
     //console.log("User",finduser)
      return res.status(200).json({ message: "User already exists",data: finduser});
    } else {
      const newuser = await Victim.create({
        name, adharNumber, email, image, phNumber, age, address, gender, category, Pdate, Ptime
            });
      console.log(newuser);
      res.status(200).json({ message: "User created successfully", data: newuser });
    }
  }
  catch (error) {
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
const missingpeopleList = async (req, res) => {

  try {
    const missingpeople = await Victim.find({ category: "Missing" });
    console.log(missingpeople)
    res.status(200).json(missingpeople);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = { missingpeople, affectpeople, missingpeopleList  };