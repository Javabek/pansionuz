const express = require("express");
const router_bssr = express.Router();
const pansionController = require("./controllers/pansionController");

/*******************************
 *           BSSR EJS           *
 ******************************/

router_bssr.get("/signup", pansionController.getSignUpMyPansion);
router_bssr.post("/signup", pansionController.signupProcess);

router_bssr.get("/login", pansionController.getLoginMyPansion);
router_bssr.post("/login", pansionController.loginProcess);

router_bssr.post("/logout", pansionController.logout);


module.exports = router_bssr;