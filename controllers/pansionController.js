let pansionController = module.exports;

const Member = require("../models/Member");


pansionController.getSignUpMyPansion = async (req, res) => {
    try {
        console.log('Post: cont/getSignUpMyPansion');
        res.render("signup")
    } catch (error) {
        console.log(`Error: cont/getSignUpMyPansion, ${error.message}`);
        res.json({ state: "fail", message: error.message })
    }
}

pansionController.signupProcess = async (req, res) => {
    try {
        console.log('Post: cont/signup');
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        res.json({ state: "succeed", data: new_member })
    } catch (err) {
        console.log(`Error, cont/signup, ${err.message}`);
    }
};

pansionController.getLoginMyPansion = async (req, res) => {
    try {
        console.log('Post: cont/getLoginMyPansion');
        res.render("login")
    } catch (error) {
        console.log(`Error: cont/getLoginMyPansion, ${error.message}`);
        res.json({ state: "fail", message: error.message })
    }
}

pansionController.loginProcess = async (req, res) => {
    try {
        console.log('Post: cont/login');
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        res.json({ state: "succeed", data: result })
    } catch (err) {
        console.log(`Error, cont/login, ${err.message}`);
        res.json({ state: "failed", message: err.message })
    }
};

pansionController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
};