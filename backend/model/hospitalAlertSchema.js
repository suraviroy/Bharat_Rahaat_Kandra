const mongoose = require("mongoose");
// ({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
//     guardianRelation,storU,storP,lat,lon,imageC,imageP,state,statuss})
const hospitalAlertSchema = new mongoose.Schema({
    alertsender:{
        type:String,
    },
   
    numberpeople:{
        type:String,
        //default:false
    },
    date:{
        type:String,
        //default:false
    }, 
    time:{
        type:String,
        //default:false
    },
    contactNumber: {
        type: Number,
        //required:true
    },
    accidenttype: {
        type: String,
        //required:true
    },
    
});


module.exports = mongoose.model("HospitalAlert", hospitalAlertSchema);