const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    handle: String,
    text: String
}, { timestamps: true });

module.exports = mongoose.model("Messages", messageSchema);