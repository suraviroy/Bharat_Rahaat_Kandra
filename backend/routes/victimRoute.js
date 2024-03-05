const express = require('express');
const {missingpeople,affectpeople, missingpeopleList }=require('../controller/victimController');
const auth=require('../middleware/auth');
const victimRouter = express.Router();
// alertRouter.get("/notification",notification);
victimRouter.post("/missingpeople",missingpeople);
victimRouter.get("/affectpeople",affectpeople);
victimRouter.get("/missingpeopleList",missingpeopleList );
// alertRouter.post("/foodalert",foodalert);

module.exports = victimRouter;