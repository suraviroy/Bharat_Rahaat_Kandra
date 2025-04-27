const express=require('express');
const {sendalert,MapAlert,notification,foodalert,UpdatePeople, sendhospitalalert, lasthospitalalert,allhospitalalerts}=require('../controller/alertController');
const auth=require('../middleware/auth');
const alertRouter=express.Router();
alertRouter.get("/notification",notification);
alertRouter.post("/sendalert",sendalert);
alertRouter.get("/MapAlert",MapAlert);
alertRouter.post("/foodalert",foodalert);
alertRouter.post("/UpdatePeople/:id",UpdatePeople); 
alertRouter.post("/sendhospitalalert",sendhospitalalert);
alertRouter.get("/lasthospitalalert",lasthospitalalert);
alertRouter.get("/allhospitalalerts",allhospitalalerts);

module.exports=alertRouter;