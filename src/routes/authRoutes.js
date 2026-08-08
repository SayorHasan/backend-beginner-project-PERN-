import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'


const router = express.Router()

//Register a new user endpoint /auth/register
router.post('/register',(req,res)=>{
    const {username,password} = req.body

    const hashedPassword = bcrypt.hashSync(password, 8)
    
    try{

    }catch(err){
        console.log(err.message)
        res.sendStatus(503)
    }

    res.sendStatus(201)

})

//Login a user endpoint /auth/login
router.post('/login',(req,res)=>{

})


export default router