var mongoose =require('./db');

var userSchema =new mongoose.Schema({
    username:Number,
    password:String,
    stuname:String,
    age:Number,
    sex:Number,
    teachlevel:Number,
    phone:Number,
    email:String,
    school:String,
    teachexp:String,
    workexp:String,
    gold:String,
    introduce:String
});
var userModal =mongoose.model('user',userSchema);
module.exports=userModal;
