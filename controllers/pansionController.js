let pansionController = module.exports;

const Member = require("../models/Member");

pansionController.getMyRoomData = async (req, res) => {
    try {
        console.log('Get: cont/getMyRoomData');
        //todo: get my pansion rooms

        res.render("pansion-room-type")
    } catch (error) {
        console.log(`Error: cont/getMyRoomData, ${error.message}`);
        res.json({ state: "fail", message: error.message })
    }
};

pansionController.getSignUpMyPansion = async (req, res) => {
    try {
        console.log('Get: cont/getSignUpMyPansion');
        res.render("signup")
    } catch (error) {
        console.log(`Error: cont/getSignUpMyPansion, ${error.message}`);
        res.json({ state: "fail", message: error.message })
    }
};

pansionController.signupProcess = async (req, res) => {
    try {
        console.log('Post: cont/signup');
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        req.session.member = new_member;
        res.redirect("/resto/room/types");
    } catch (err) {
        console.log(`Error, cont/signup, ${err.message}`);
    }
};

pansionController.getLoginMyPansion = async (req, res) => {
    try {
        console.log('Get: cont/getLoginMyPansion');
        res.render("login")
    } catch (error) {
        console.log(`Error: cont/getLoginMyPansion, ${error.message}`);
        res.json({ state: "fail", message: error.message })
    }
};

pansionController.loginProcess = async (req, res) => {
    try {
        console.log('Post: cont/login');
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        req.session.member = result;
        req.session.save(function () {
            res.redirect("/resto/room/types")
        });

    } catch (err) {
        console.log(`Error, cont/login, ${err.message}`);
        res.json({ state: "failed", message: err.message })
    }
};

pansionController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
};

pansionController.checkSessions = (req, res) => {
    if (req.session?.member) {
        res.json({ state: "succeed", data: req.session.member });
    } else {
        res.json({ state: "fail", message: "You are not authenticated" })
    }
};