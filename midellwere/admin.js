


module.exports=function(req,res,next){

    if(!req.users.isAdmin)return res.status(403).send('acces denied..');
    next();
}