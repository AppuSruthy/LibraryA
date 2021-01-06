const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata'); 
function router(nav){


adminRouter.get('/',function(req,res){
res.render("newBook",{
nav,
        title:'Library',
        
    });
});

adminRouter.get('/author',function(req,res){
    res.render("newAuthor",{
    nav,
            title:'Library',
            
        });
    });

adminRouter.post('/Add',function(req,res){
    var item = {
         title: req.body.title,
         author: req.body.author,
         genere: req.body.genere,
         image: req.body.image
    }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
});
adminRouter.get('/book',function(req,res){
    res.render("newBook",{
    nav,
            title:'Library',
            
        });
    });
adminRouter.post('/addAuthor',function(req,res){
var auth= {
    name : req.body.authName,
    authorname : req.body.name,
    language: req.body.language,
    books:req.body.books,
    image:req.body.image
}
var author = Authordata(auth);
author.save();
res.redirect('/authors');
})

return adminRouter;
}
module.exports = router;