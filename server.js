var expres=require("express");
var app=expres();
var PORT=3000;
/*
app.get("/",function(req,res){
    res.send("Selamun aleyküm");
})
*/
var midleware={
    requireAuthentication:function(req,res,next){
        console.log("özel root girildi");
        next();
    },
    logger:function(req,res,next){
        console.log(req.method+" "+req.originalUrl);
        next();
    }
}

//app.use(midleware.requireAuthentication);

app.use(midleware.logger);

app.get("/hakkimda",midleware.requireAuthentication, function(req,res){
    res.send("Hakkımda sayfası");
})

app.use(expres.static(__dirname+"/public"));
app.listen(PORT,function(){
    console.log("sunucumuz "+PORT+" no lu portta çalışıyor");
});



