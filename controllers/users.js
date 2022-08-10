import { v4 as uuidv4 } from 'uuid';

 //this file contains controllers for all the other files
 const users = []

 export const getAllUsers=(req,res)=>{
    console.log(users)
    res.send(users);
}
 export const createUser=(req,res)=>{
    const user=req.body;
    
    users.push({
        ...user,id:uuidv4()
    });

    res.send(`${user.firstName} added to the database`)
};
export const getSpacificUser=(req,res)=>{
    //getting the id from the req.params body 
    const {id}=req.params;

   const findUser= users.find((user)=>user.id===id);
    res.send(findUser)
};
export const deleteSpacificUser=(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.id!==id)

    res.send(`user with the ${id} is deleted from the database`)
}
export const patchUser=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;

    const user=users.find((user)=>user.id===id);

    if(firstName)user.firstName=firstName;
    if(lastName)user.firstName=lastName;
    if(age)user.firstName=age;

    res.send(`user with the id ${id} has been updated`)

 }