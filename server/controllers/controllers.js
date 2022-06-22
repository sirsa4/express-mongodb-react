//schema model
const schema = require("../models/userModel");

const getUsers = async(req,res)=>{
    try {
        const users = await schema.find({});

        res.status(200).json({success: true, method: req.method, users});
    } catch (error) {
        res.status(500).json({success: false, msg: error});
    }
}

const getUser = async (req,res)=>{
    try {
        const {id} = req.params;

        const user = await schema.findOne({_id: id});
        if(!user)res.status(404).json({success: true, msg: `user with id: ${id} does not exist`});
        res.status(200).json({success: true, method: req.method, user});
    } catch (error) {
        res.status(500).json({success: false, msg: error});
    }
}

const postUser = async (req,res)=>{
    try {
        const user = await schema.create(req.body);
        res.status(200).json({success: true, method: req.method, user});
    } catch (error) {
        res.status(500).json({success: false, msg: error});
    }
}

const updateUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await schema.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true,
        });
        if(!user)res.status(404).json({success: true, msg: `user with id: ${id} does not exist`});
        res.status(200).json({success: true, method: req.method, user});
    } catch (error) {
        res.status(500).json({success: false, msg: error});
    }
}

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await schema.findOneAndDelete({_id: id});
        if(!user)res.status(404).json({success: true, msg: `user with id: ${id} does not exist`});
        res.status(200).json({success: true, method: req.method, user});
    } catch (error) {
        res.status(500).json({success: false, msg: error});
    }
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser,
}