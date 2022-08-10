import express from 'express';
const router =express.Router();
import {createUser,getAllUsers,getSpacificUser,deleteSpacificUser,patchUser} from '../controllers/users.js'
//this is ouruser array where we will append our data
router.get('/',getAllUsers);
router.post('/',createUser)
//findind a certain people form our array
router.get('/:id',getSpacificUser)
router.delete('/:id',deleteSpacificUser)
 router.patch('/:id',patchUser)

export default router; 