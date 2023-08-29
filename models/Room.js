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
    };

    async updateChosenRoomData(id, updated_data, mb_id) {
        try {
            id = shapeIntoMongooseObjectId(id);
            mb_id = shapeIntoMongooseObjectId(mb_id);

            const result = await this.roomModel
                .findOneAndUpdate({ _id: id, pansion_mb_id: mb_id }, updated_data, {
                    runValidators: true,
                    lean: true,
                    returnDocument: "after"
                })
                .exec();
            assert.ok(result, Definer.general_err1);
            return result;
        } catch (err) {
            throw err;
        }
    }

}

module.exports = Room;
