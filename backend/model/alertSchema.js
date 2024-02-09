const mongoose = require("mongoose");
// ({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
//     guardianRelation,storU,storP,lat,lon,imageC,imageP,state,statuss})
const alertSchema = new mongoose.Schema({
    alertsender:{
        type:String,
    },
    time:{
        type:String,
    },
    latalert:{
        type:Number,
        //default:false
    },
    lonalert:{
        type:Number,
        //default:false
    },
    typeofrequest:{
        type:String,
        //default:false
    },
    selectedResourceTypes:{
       type: [String],
      default :[],
    },
    customResourceType:{
        type:String,
        //default:false
    },
    contactNumber: {
        type: Number,
        //required:true
    },
    email: {
        type: String,
        //default:false
    },
    address: {
        type: String,
        //default:false
    },
});


module.exports = mongoose.model("Alert", alertSchema);