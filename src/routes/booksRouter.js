const express = require('express');
const booksRouter = express.Router();
function router(nav){
var books=[
    {
        title : 'Thousand Splendid Suns',
        Author :'Khalid Hossini',
        genere : 'Fiction',
        img:"tss.jpg"
    },
    {
        title : 'The Girl on the Train',
        Author :'Paula Hawkins',
        genere : 'Mystery Fiction',
        img:'GOT.jpg'
    },
        {
            title : 'The Diary Of A Young Girl',
            Author :'Anne Frank',
            genere : 'Non-fiction',
            img:'daf.jpg'
    }]

booksRouter.get('/',function(req,res){
res.render("books",{
nav,
        title:'Library',
        books
    });
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
        nav,
        title:'Library',
        book:books[id]
    });
});
return booksRouter;
}
module.exports = router;