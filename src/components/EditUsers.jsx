import { FormControl, FormGroup, InputLabel,Input,Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState, useEffect } from 'react'
import { editUser, getUsers } from '../Services/api';
import { useHistory, useParams} from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *':{
            marignTop:20
        }
    }
})

const initialValues={
    name:"",
    username:"",
    email:"",
    phone:""
}

const EditUsers = () => {
    const [user, setUser]= useState(initialValues);
    const {name, username, email, phone}= user;
    const classes = useStyle();

    const history = useHistory();

    const {id}= useParams();
    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails=async()=>{
      const resp= await getUsers(id);
      setUser(resp.data);  //set filed data 
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})

    }

    const editUserDetails=async()=>{
        await editUser(id, user);

        history.push("/all-user") //after save go this url
    }


    return (
        <div>
            <FormGroup className={classes.container}>
                <Typography varient="h3">Edit Users</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>E-mail</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
                </FormControl>
                <Button varient="contained" onClick={()=>editUserDetails()} color="primary">Edit User</Button>
            </FormGroup>
        </div>
    )
}

export default EditUsers
