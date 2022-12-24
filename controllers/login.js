const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();
const { TOKEN_SECRET,verifyToken } = require('../middlewares/validate-jwt');
const models = require('../models')
const User = models.user 
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    try{
        const user = await User.findAll({
            where:{
                email: req.body.email
            }
        })
    
        if(user[0]){
            const userId = user[0].dataValues.id
            const validPassword = await bcrypt.compare(req.body.password, user[0].dataValues.password)
    
            if(!validPassword){
                res.status(401).send({message: 'User is not valid'})        
            }
            else{
                const token = jwt.sign({
                    name: user.name,
                    id: user.email
                }, TOKEN_SECRET)
        
                res.send({message:'Succesfully login',token, userId})
            }
        } else {
            res.status(402).send({message: 'Email not found'})
        }
    } 
    catch{
        res.status(500).send({message: "An error has occurred"})
        next(err)
    }
})

module.exports = router

