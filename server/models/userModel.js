const {Schema, model} = require("mongoose");

const schema = new Schema({
    userName: {
        type: String,
        required: [true, "user name must be characters only"],
        maxlength: [10, "user name cannot be more than 10 characters"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Email is required"],
    }
});

const userSchema = model("user",schema);

module.exports = userSchema;