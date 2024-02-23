const jwt = require('jsonwebtoken')

const verifytoken= (req,res,next)=>{
    const token = req.headers['authorization'];
    if(token){
        const decoded = jwt.verify(token,"SecertKey")
        if(decoded){
            next();
        }else{
            res.json({message:"invalid Token"})
        }
    } else {
        res.json({"message":"Not valid "})
    }
};
module.exports = verifytoken;