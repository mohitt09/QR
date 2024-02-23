const user = require('../models/users')
const jwt = require('jsonwebtoken')


let login = async (req, res) => {
    let { Firstname, uidaiNo } = req.body;
    try {
        let result = await user.findOne({ Firstname, uidaiNo });

        const token = jwt.sign({Firstname},'SecertKey',{expiresIn:"2h"})
        
        res.status(200).json({token});

        // if (result) {
        //     res.status(200).json({ message: 'Login successful', user: result });
        // } else {
        //     res.status(401).json({ message: 'Invalid credentials' });
        // }
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = login