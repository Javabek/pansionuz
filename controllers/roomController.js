let roomController = module.exports;

roomController.getAllRoom = async (req, res) => {
    try {
        console.log("Get: cont/getAllRoom");
    } catch (error) {
        console.log(`Error, cont/getAllRoom, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

roomController.addNewRoom = async (req, res) => {
    try {
        console.log("POST: cont/addNewRoom");

        //TODO: room creation develop

        res.send("ok")
    } catch (error) {
        console.log(`Error, cont/addNewRoom, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

roomController.updateChosenRoom = async (req, res) => {
    try {
        console.log("POST: cont/updateChosenRoom");
    } catch (error) {
        console.log(`Error, cont/updateChosenRoom, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};
