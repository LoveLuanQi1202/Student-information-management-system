var express = require('express');
var router = express.Router();
var myModel=require('../config/myModel');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.post('/dologin',function(req,res,next){

  var login={
    username:req.body.username,
    password:req.body.password
  };

  myModel.find(login,function(err,data){
    if(err){
      console.log('数据库链接错误');
      return;
    }

    if(data.length!=0){
      req.session.user={
        username:login.username,
        login:true
      };
      res.redirect('/myindex');
    }else{
      res.redirect('/');
    }
  });
});

router.get('/resiger',function(req,res,next){
  res.render('resiger');
});

router.get('/res/:username',function(req,res,next){
  con={
    username:req.params.username
  };
  myModel.find(con,function(err,data){
    if(err){
      console.log(err);
      res.send('error');
    }
    if(data.length!=0){
      res.send('no');

    }else{
      res.send('ok');
    };
  });
});


router.post('/doresiger',function(req,res,next){
  var data={
    username:req.body.username,
    password:req.body.password,
    stuname:req.body.stuname,
    age:req.body.age,
    sex:req.body.sex,
    teachlevel:req.body.teachlevel,
    phone:req.body.phone,
    email:req.body.email,
    school:req.body.school,
    teachexp:req.body.teachexp,
    workexp:req.body.workexp,
    gold:req.body.gold,
    introduce:req.body.introduce
  };
  myModel.create(data,function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});
router.get('/myindex',function(req,res,next){

  if(req.session.user.login==true){

    myModel.find({username:req.session.user.username},function(err,data){
      if(err){
        console.log(err);
        return;
      }
      else{
        res.render('myindex',{data:data});
      };
    })
  }

});

router.get('/logout',function(req,res,next){
  delete req.session.user;
  res.redirect('/');
});


module.exports = router;
