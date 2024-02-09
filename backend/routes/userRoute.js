const express=require('express');
const {registration, login,verification,changeStatus,changeStatusR,MapAdmin,profile,database,database2,invertory}=require('../controller/userController');
const auth=require('../middleware/auth');
const userRouter=express.Router();


userRouter.post("/registration",registration);
userRouter.post("/login",login);
userRouter.get("/verification",verification);
userRouter.put("/changeStatus",changeStatus);
userRouter.put("/changeStatusR",changeStatusR);
userRouter.get("/MapAdmin",MapAdmin);
userRouter.get("/profile",auth,profile);
userRouter.post("/database",database);
userRouter.post("/database2",database2);
userRouter.get("/invertory",invertory);
// userRouter.get("/getall",auth,getall);
// userRouter.post("/updateaccess",auth,updateaccess);


module.exports=userRouter;