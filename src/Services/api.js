import axios from "axios";

const url ="http://localhost:3003/users";

// export const getUsers= async()=>{
//     return await axios.get(url);
// }

export const getUsers= async(id)=>{
    id = id || "";
    return await axios.get(`${url}/${id}`);
}

export const addUsers=async(user)=>{
    return await axios.post(url,);
}

//edit function
export const editUser = async(id,user)=>{
    return await axios.put(`${url}/${id}`, user); //user is upated data
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}