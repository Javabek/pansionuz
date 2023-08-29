const express = require("express");
const router_bssr = express.Router();
const pansionController = require("./controllers/pansionController");
const roomController = require("./controllers/roomController");
const uploader_room = require("./utils/upload-multer")("rooms");
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

router_bssr.post(
    "/rooms/create",
    pansionController.validateAuthPansion,
    uploader_room.array("room_images", 5),
    roomController.addNewRoom
);

router_bssr.post(
    "/rooms/edit/:id",
    pansionController.validateAuthPansion,
    roomController.updateChosenRoom
);

module.exports = router_bssr;