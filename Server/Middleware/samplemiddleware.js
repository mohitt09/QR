const samplemiddleware = (req,res,next)=>{
    console.log('we are in middleware')
    next();
}


module.exports = samplemiddleware;