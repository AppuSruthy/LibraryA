const express = require('express');
const authorsRouter = express.Router();
function router(nav){
var authors=[
    {
        name : 'Khaled Hosini',
        language :'English',
        books : 'Thousand Splendid Suns',
        img:"KH.jpg"
    },
    {
        name : 'Paula  Hawkins',
        language :'English',
        books : 'The Girl On The Train',
        img:"ph.jpg"
    },
        {
            name : 'Arundati roy',
        language :'English',
        books : 'The God Of Small Things',
        img:"ar.jpg"
    }]

authorsRouter.get('/',function(req,res){
res.render("authors",{
nav,
        title:'Library',
        authors
    });
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('author',{
        nav,
        title:'Library',
        author:authors[id]
    });
});
return authorsRouter;
}
module.exports = router;