const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();
const { TOKEN_SECRET,verifyToken } = require('../middlewares/validate-jwt');
const models = require('../models')
const User = models.user 


router.post('/', async (req, res) => {
    const user = await User.findAll({
        where:{
            email: req.body.email
        }
    })

    if(user[0]){
        const userId = user[0].dataValues.id
        const validPassword = (req.body.password === user[0].dataValues.password)
    
        if(!validPassword){
            res.status(401).send({message: 'El usuario no es valido'})        
        }
        else{
            const token = jwt.sign({
                name: user.name,
                id: user.email
            }, TOKEN_SECRET)
    
            res.send({message:'Login exitoso',token, userId})
        }
    } else {
        res.status(402).send({message: 'Email no registrado'})
    }

})

module.exports = router

/* register */

/*const bcrypt = require('bcrypt')*/
/*const { User } = require('../models/user')
const { UserStats } = require('../models/userStats')*/

/*async function createUserStats(mail){
    const userCrated = await User.findAll({
        where:{
            email: mail
        }
    })

    const newUserId = userCrated[0].dataValues.id

    const newUserStats= {
        user_id: newUserId,
        points: 0,
        streak: false,
        streak_points: 0
    }
    await UserStats.create(newUserStats)
}*/

/*router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    const user = await User.findAll({
        where:{
            email: req.body.email
        }
    })

    if(user){
        res.status(400).send({message: "Ese email ya estÃ¡ registrado"})
    } else {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: password
        }
    
        await User.create(newUser)
        .then(()=>{
            createUserStats(req.body.email)
        })
        .then(()=>{res.status(204).send({message: "Usuario creado exitosamente"})})
    }   
})*/