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
  Signupdata.findOne({email:req.body.email,password:req.body.password},function(err,user){
    // if(err)
    // {  
    //   throw err;
    //  return   res.status(500).send();
    // } 
    
        if(user){
          return res.redirect("/");
          return res.status(200).send('successfully logged in!!');
         
        }
        else{
        // res.send("invalid username or password");
        res.render("loginerror",{
          nav,
                  title:'Library',
                  
              });

        }
  
  //return res.alert("login successfull");
  //return res.redirect("/");
});

        
    // var email=req.body.email;
    // var password=req.body.password;
    // const useremail = Signupdata.findOne({email:email});
    // if(useremail.password == password){
    //   res.status(201);
    //   res.redirect("/");
    // }
    // else{
    //   res.send("invalid login details");
    // }
    // Signupdata.findOne({email:email,password:password},function(err,user){
    //    if(user)
    //    {
    //      res.redirect('/home');
    //    }
      
    //   if(err){
    //       console.log(err);
          
    //       res.render("index",
    //       {
    //         title:"Library",nav
      
    //       });
    //    }
    //     if(!user){
          
    //       res.render("index",
    //       {
    //         title:"Library",nav
      
    //       });
           
    //     }
        
    // })
});

return loginRouter;
}
module.exports = router;