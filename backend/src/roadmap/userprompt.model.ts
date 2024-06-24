import mongoose, { Schema } from "mongoose";

const userPromptSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

const UserPrompt = mongoose.model("UserPrompt", userPromptSchema);
export default UserPrompt;