const jwt=require('jsonwebtoken');
const config=require('config');
module.exports=function(req,res,next){
    const token=req.header('x_auth_token');
    if(!token)return res.status(401).send('acces denied.no token proveided');
    try {
        const decoded= jwt.verify(token,config.get('jwtprivatkey'));
        req.users=decoded;
        next();
    } catch (ex) {

        res.status(400).send('invalide token');
        
    }
   
    
}