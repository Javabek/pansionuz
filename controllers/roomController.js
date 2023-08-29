const Room = require("../models/Room");
const assert = require("assert");
const Definer = require("../lib/mistake");

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
        assert(req.files, Definer.general_err3)

        const room = new Room()
        let data = req.body

        data.room_images = req.files.map((ele) => {
            return ele.path;
        })

        const result = await room.addNewRoomData(data, req.member);
        assert(result, Definer.room_err1);

        const html = `<script>
                           alert(new room added succesfully);
                           window.location.replace('/resto/room/types');
                      </script>`;
        res.end(html);
    } catch (error) {
        console.log(`Error, cont/addNewRoom, ${error.message}`);
    }
};

roomController.updateChosenRoom = async (req, res) => {
    try {
        console.log("POST: cont/updateChosenRoom");
        const room = new Room();
        const id = req.params.id;

        const result = await room.updateChosenRoomData(
            id,
            req.body,
            req.member._id
        );
        await res.json({ state: "success", data: result });
    } catch (error) {
        console.log(`Error, cont/updateChosenRoom, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};
