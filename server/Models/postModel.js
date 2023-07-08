import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    likes: {
        type: Array,
    },
    image: {
        type: String,
        default: "https://www.davr.gov.ua/assets/images/noimageavailable.png.pagespeed.ce.Un7S21_-0R.png"
    },
}, {timestamps: true});

const PostModel = mongoose.model("Posts", PostSchema);

export default PostModel;