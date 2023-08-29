const mongoose = require("mongoose");

exports.member_type_enums = ["USER", "ADMIN", "PANSION"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"]
exports.ordinary_enums = ["Y", "N"];
exports.room_bed_type_enums = ["single", "double", "twin", "triple", "family"];
exports.room_status_enums = ["UNBOOKED", "PROCESS", "BOOKED"];
exports.room_size_enums = ["standart", "queen", "king", "villa"];


/******************************
 * MONGODB RELATED COMMANDS *
 *****************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if (typeof target === "string") {
        return new mongoose.Types.ObjectId(target);
    } else return target
}