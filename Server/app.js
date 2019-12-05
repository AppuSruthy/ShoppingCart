var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var products=require('./models/products');
var url="mongodb://127.0.0.1:27017/cart";
var app=new express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());//since data is sent as a json string
mongoose.connect(url,function(err){
    if(err) throw err;
    else
    {
        console.log("connection established");
    }
});

app.get('/data',function(req,res){
    //enabling course policy
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed



//*********************************************** */
// var products=[{name:"printer",company:"HP",price:9000},
// {name:"scanner",company:"canon",price:10000},
// {name:"camera",company:"Nikon",price:18000}
// ]
//     res.send(products)
// })

products.find({},function(err,result){
    if(err) throw err;
    else
    res.send(result);
});
});

app.post("/insert",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

     var prd=new products();
     prd.name=req.body.name;
  
    prd.company=req.body.company;
    prd.price=req.body.price;
     prd.save(function(err){
        if(err) throw err
         else{
            res.send({msg:"data inserted"});
         }
     })
    })
     
    app.post("/update",function(res,req){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        res.send("reached server")
products.updateOne({name:req.body.Name},{company:req.body.newComp,price:req.body.newp})
if(err) throw err
else
res.send({msg:"data updated"})
    })
    app.post("/delete",function(res,req){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        res.send("reached server")
        products.deleteOne({name:req.body.pName},
            function(err){
            if(err) throw err
            else {
    res.send("data deleted");
}
        }
    )
    })
app.listen(5000,function(){
    console.log("listening to port 5000");
});