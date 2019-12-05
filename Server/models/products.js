var mongoose=require('mongoose');
var prdschema=new mongoose.Schema({name:String,
company:String,
price:Number
})

var prdmodel=mongoose.model("products",prdschema,"products");
module.exports=prdmodel;