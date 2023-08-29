const mongoose = require("mongoose")
const {
    room_bed_type_enums,
    room_status_enums,
    room_size_enums
} = require("../lib/config")

const Schema = mongoose.Schema

const roomSchema = new mongoose.Schema(
    {
        room_name: {
            type: String,
            required: true
        },
        room_bed_type: {
            type: String,
            required: true,
            enum: {
                values: room_bed_type_enums,
                message: "{ VALUE } is not among enum values"
            }
        },
        room_status: {
            type: String,
            required: false,
            default: "UNBOOKED",
            enum: {
                values: room_status_enums,
                message: "{VALUE} is not among permitted enum values"
            }
        },
        room_price: {
            type: Number,
            required: true
        },
        room_discount: {
            type: Number,
            required: false,
            default: 0
        },
        room_left_count: {
            type: Number,
            required: true
        },
        room_size: {
            type: String,
            default: "standart",
            required: true,
            enum: {
                values: room_size_enums,
                message: "{VALUE} is not among permitted enum values"
            }
        },
        room_description: {
            type: String,
            required: true
        },
        room_images: {
            type: Array,
            required: false,
            default: []
        },
        room_likes: {
            type: Number,
            required: false,
            default: 0
        },
        room_views: {
            type: Number,
            required: false,
            default: 0
        },
        pansion_mb_id: {
            type: Schema.Types.ObjectId,
            ref: "Member",
            required: false
        }
    },
    { timestamps: true }
)

roomSchema.index(
    { pansion_mb_id: 1, room_name: 1, room_size: 1 },
    { unique: true }
);

module.exports = mongoose.model("Room", roomSchema)
