const express = require('express');
const Signupdata = require('../model/logdata');
const loginRouter = express.Router();
loginRouter.use(express.static("./public"));
function router(nav){


loginRouter.get('/',function(req,res){
res.render("login",{
nav,
        title:'Library',
        
    });
});

loginRouter.post('/',function(req,res){
        
    var email=req.body.email;
    var password=req.body.password;
    Signupdata.findOne({email:email,password:password},function(err,user){
       if(user)
       {
         res.redirect('/home');
       }
      
      if(err){
          console.log(err);
          
          res.render("index",
          {
            title:"Library",nav
      
          });
       }
        if(!user){
          
          res.render("index",
          {
            title:"Library",nav
      
          });
           
        }
        
    })
});

return loginRouter;
}
module.exports = router;