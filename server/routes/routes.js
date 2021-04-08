const express = require('express');
const router = express.Router();
const Log = require('../models/SignUpModels');
const bcrypt = require('bcrypt')


router.post('/signup', (request, response) => {
    //response.send('send')
    const newUser = new Log({
        fullName:request.body.fullName,
        email:request.body.email,
        password:request.body.password,
        confirmPassword: request.body.confirmPassword
    })

    newUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.route('/users').get((req, res) =>{
    Log.find()
    .then(foundUser => res.json(foundUser))
})

router.get('/users')
module.exports = router;