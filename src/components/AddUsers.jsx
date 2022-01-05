import { FormControl, FormGroup, InputLabel,Input,Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { addUsers } from '../Services/api';
import { useHistory } from 'react-router-dom';

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

const AddUsers = () => {
    const [user, setUser]= useState(initialValues);
    const {name, username, email, phone}= user;
    const classes = useStyle();

    const history = useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})

    }

    const addUserDetails=async()=>{
        await addUsers(user);

        history.push("/all-user") //after save go this url
    }


    return (
        <div>
            <FormGroup className={classes.container}>
                <Typography varient="h3">Add Users</Typography>
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
                <Button varient="contained" onClick={()=>addUserDetails()} color="primary">Add User</Button>
            </FormGroup>
        </div>
    )
}

export default AddUsers
