var expres=require("express");
var midleware=require("./midleware");

var app=expres();
var PORT=3000;
/*
app.get("/",function(req,res){
    res.send("Selamun aleyküm");
})
*/

//app.use(midleware.requireAuthentication);

app.use(midleware.logger);

app.get("/hakkimda",midleware.requireAuthentication, function(req,res){
    res.send("Hakkımda sayfası");
})

app.use(expres.static(__dirname+"/public"));
app.listen(PORT,function(){
    console.log("sunucumuz "+PORT+" no lu portta çalışıyor");
});



