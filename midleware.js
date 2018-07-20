module.exports={
    requireAuthentication:function(req,res,next){
        console.log("özel root girildi");
        next();
    },
    logger:function(req,res,next){
        console.log(req.method+" "+req.originalUrl);
        next();
    }
}