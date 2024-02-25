const mongoose = require("mongoose");
// ({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
//     guardianRelation,storU,storP,lat,lon,imageC,imageP,state,statuss})
const victimSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    adharNumber:{
        type:Number,
    },
    address:{
        type:String,
    },
    state:{
        type:String,
        //default:false
    },
    phNumber:{
        type:Number,
        //default:false
    },
    alPhNumber:{
        type:Number,
        //default:false
    },
    dob:{
        type:String,
        //default:false
    },
    // selectedResourceTypes:{
    //    type: [String],
    //   default :[],
    // },
    gender:{
        type:String,
        //default:false
    },
    age: {
        type: Number,
        //required:true
    },
    email: {
        type: String,
        //default:false
    },
    fatherName: {
        type: String,
        //default:false
    },
    motherName: {
        type: String,
        //default:false
    },
    image: {
        type: String,
        //default:false
    },
    category: {
        type: String,
        //default:false
    },
    Pdate :{
        type: String
    },
    Ptime :{
        type :String
    }
});


module.exports = mongoose.model("Victim", victimSchema);