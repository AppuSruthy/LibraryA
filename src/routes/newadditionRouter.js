const express = require('express');
const newadditionRouter = express.Router();
function router(nav){


newadditionRouter.get('/author',function(req,res){
res.render("newAuthor",{
nav,
        title:'Library',
        
    });
});
newadditionRouter.get('/book',function(req,res){
    res.render("newBook",{
    nav,
            title:'Library',
            
        });
    });


return newadditionRouter;
}
module.exports = router;