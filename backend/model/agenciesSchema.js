const mongoose = require("mongoose");
// ({doctorName,name,contactNumber,email,nagency,idNumber,aadharNumber,pin,address,guardianName,
//     guardianRelation,storU,storP,lat,lon,imageC,imageP,state,statuss})
const agenciesSchema = new mongoose.Schema({
    doctorName: {
        type: String,
    },
    name: {
        type: String,
    },
    contactNumber: {
        type: Number,
        //required:true
    },
    email: {
        type: String,
        //default:false
    },
    nagency: {
        type: String,
        //default:false
    },
    idNumber: {
        type: String,
        //default:false
    },
    aadharNumber: {
        type: Number,
        //required:true
    },
    address: {
        type: String,
        //default:false
    },
    pin: {
        type: Number,
        //required:true
    },
    guardianName: {
        type: String,
        //default:false
    },
    guardianRelation: {
        type: String,
        //default:false
    },
    storU: {
        type: String,
        //default:false
    },
    storP: {
        type: String,
        //default:false
    },
    lat: {
        type: Number,
        //default:false
    },
    lon: {
        type: Number,
        //default:false
    },
    imageC: {
        type: String,
        //default:false
    },
    imageP: {
        type: String,
        //default:false
    },
    state: {
        type: String,
        //default:false
    },
    statuss: {
        type: String,
        //default:false
    },
    resources: {
        type: Array,
       // default: [],
    },
    resourceQuantities: {
        type: Object,
       // default: {},
    },
    shelterOccupancy: {
        type: Object,
    },
    members: {
        type: Array,
       // default: [],
    },
    namem: {
        type: String,
        //default:false
    },
    role: {
        type: String,
        //default:false
    },
    shift: {
        type: String,
        //default:false
    },

});


module.exports = mongoose.model("Agencies", agenciesSchema);