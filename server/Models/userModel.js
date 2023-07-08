import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: {
            type: String,
            default: "https://u.o0bc.com/avatars/stock/_no-user-image.gif"
        },
        coverPicture: {
            type: String,
        },
        about: {
            type: String,
        },
        livesIn: {
            type: String,
        },
        worksAt: {
            type: String,
        },
        relationship: {
            type: String,
        },
        followers: {
            type: Array,
        },
        following: {
            type: Array,
        },
    },
    {timestamps:true}
)

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;