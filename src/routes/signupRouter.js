const express = require('express');
const SignupRouter = express.Router();
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
module.exports = router;