import CommentModel from "../Models/commentModel.js";
import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";

export const createComment = async (req, res) => {
    const newComment = new CommentModel(req.body);
    try {
        await newComment.save();
        res.status(200).json("Comment created");
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getComments = async (req, res) => {
    const postId = req.params.id;
    try {
        const currentPostComments = await CommentModel.find({postId : postId});
        res.status(200).json(currentPostComments);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateComment = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;
    try {
        const comment = await CommentModel.findById(id);
        if(comment.userId === userId){
            await comment.updateOne({$set: req.body});
            res.status(200).json("Comment updated.");
        } else{
            res.status(403).json("Access denied.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const like = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;
    try {
        const comment = await CommentModel.findById(id);
        if(!(comment.likes.includes(userId))){
            await comment.updateOne({$push: {likes: userId}});
            res.status(200).json("Comment liked");
        } else{
            await comment.updateOne({$pull: {likes: userId}});
            res.status(200).json("Comment unliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteComment = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;
    try {
        const comment = await CommentModel.findById(id);
        if(comment.userId === userId){
            await comment.deleteOne();
            res.status(200).json("Comment deleted successfully.");
        } else{
            res.status(403).json("Access denied.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}