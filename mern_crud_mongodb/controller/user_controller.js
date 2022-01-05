import { request, response } from 'express';
import User from '../model/user_schema.js'


export const getUsers = async (request, response) => {
        try {
                let user = await User.find();
                response.status(201).json(user);
                response.json(user);
        } catch (error) {
                response.status(409).json({ message: error.message });
        }
}

export const addUsers = async (request, response) => {
        const user = request.body;
        console.log("inside")

        const newUser = new User(user);
        try {
                await newUser.save();
                response.status(201).json(newUser);
                response.json(newUser);
        } catch (error) {
                response.status(409).json({ message: error.message });
        }
}

export const getUserById = async (request, response) => {
        const id = request.params.id;
        try {
                let user = await User.findById(id);
                response.json(user);
        } catch (error) {
                response.error({ message: error.message })
        }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
        let user = await User.findById(request.params.id);
        user = request.body;
    
        const editUser = new User(user);
        try{
            await User.updateOne({_id: request.params.id}, editUser);
            response.status(201).json(editUser);
        } catch (error){
            response.status(409).json({ message: error.message});     
        }
    }

export const deleteUser = async(request, response)=>{
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User Deleted successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}