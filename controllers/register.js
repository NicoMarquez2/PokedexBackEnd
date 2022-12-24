const express = require('express')
const router = express.Router();
const models = require('../models')
const User = models.user 
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
    
        const user = await User.findAll({
            where:{
                email: req.body.email
            }
        })
        console.log(user)
        if(user [0]){
            res.status(400).send({message: "This email is already register"})
        } else {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: password,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        
            await User.create(newUser)
            .then(()=>{res.status(204).send({message: "User created succesfully"})})
        }   
    }
    catch{
        res.status(500).send({message: "An error has occurred"})
        next(err) 
    }  
})

module.exports = router