const User = require('../models/users');
const getAllUsers = async (req, res) => {
    try {
        const result = await User.find({});
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const createUser = async (req, res) => {
    const { Firstname, Lastname, uidaiNo } = req.body;
    
    try {
        const newUser = new User({
            Firstname,
            Lastname,
            uidaiNo
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




module.exports = {
    getAllUsers,
    createUser
}