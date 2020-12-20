const express = require('express');
const SignupRouter = express.Router();
const userdata = require('../model/logdata');
SignupRouter.use(express.static("./public"));
function router(nav){
SignupRouter.get('/',function(req,res){
res.render("signup",{
nav,
        title:'Library',
        
    });
});

SignupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
                title:'Library',
                
            });
        });
return SignupRouter;
}

SignupRouter.post('/save',function(req,res){
    var info = {
        name : req.body.name,
        email : req.body.email,
        password :req.body.password,
        phone : req.body.password
    }
    var user = userdata(info);
    user.save();
    res.redirect('/login');
})
module.exports = router;