const RoomModel = require("../schema/room.model");
const assert = require("assert");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const Definer = require("../lib/mistake");

class Room {
    constructor() {
        this.roomModel = RoomModel
    }

    async addNewRoomData(data, member) {
        try {
            data.pansion_mb_id = shapeIntoMongooseObjectId(member._id)

            const new_room = new this.roomModel(data)
            const result = await new_room.save()

            assert(result, Definer.room_err1)
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = Room;
