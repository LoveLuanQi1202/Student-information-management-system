var mongoose = require('mongoose');
var dbUrl ='mongodb://localhost:27017/user';
mongoose.connect(dbUrl,function(err){
  if(err){
    console.log('链接数据库出错');
    return;
  }
});
module.exports=mongoose;
