import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    likes: {
        type: Array,
    },
    postId: {
        type: String,
        required: true
    },
}, {timestamps: true});

const CommentModel = mongoose.model("Comments", CommentSchema);

export default CommentModel;