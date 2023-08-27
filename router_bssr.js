const express = require("express");
const router_bssr = express.Router();
const pansionController = require("./controllers/pansionController");

/*******************************
 *           BSSR EJS           *
 ******************************/

router_bssr
    .get("/signup", pansionController.getSignUpMyPansion)
    .post("/signup", pansionController.signupProcess);

router_bssr
    .get("/login", pansionController.getLoginMyPansion)
    .post("/login", pansionController.loginProcess);


router_bssr.post("/logout", pansionController.logout);
router_bssr.get("/check-me", pansionController.checkSessions);

router_bssr.get("/room/types", pansionController.getMyRoomData);


module.exports = router_bssr;