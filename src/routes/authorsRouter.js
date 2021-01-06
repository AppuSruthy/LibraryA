const express = require('express');
const Authorsdata = require('../model/Authordata');
const authorsRouter = express.Router();
function router(nav){

authorsRouter.get('/',function(req,res){
    Authorsdata.find()
.then(function(authors){
    res.render("authors",{
        nav,
        title:'Library',
        authors
    });
})
});


authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authorsdata.findOne({_id:id})
    .then(function(author){
        res.render('author',{
            nav,
            title:'Library',
            author
        });
    })
    
});
// booksRouter.get('/:id',function(req,res){
//     const id = req.params.id;
//     Bookdata.findOne({_id:id})
//     .then(function(book){
//         res.render('book',{
//             nav,
//             title:'Library',
//             book
//         });
//     })
    
// });

authorsRouter.get('/delete/:id',function(req,res)
{
const id= req.params.id;
// var condition={"_id":id};
Authorsdata.deleteOne({_id: id})
    .then(function(){
    res.redirect("/authors")
        
        
     })
  

});
authorsRouter.get('/update/:id',function(req,res)
    {
        
      res.render('updateBook',{
          nav,title:"Update Book"
      })
    })
    authorsRouter.post('/:id/update',function (req,res)
    {
        
            var item={
                title: req.body.title,
                author: req.body.author,
                genere: req.body.genere,
                image: req.body.image
            }
            var book= Bookdata(item);
           
        const id=req.params.id;
        Authorsdata.findOneAndReplace({id},(err,doc)=>{
        // .then(function(){
        //     // book.save();
        //     res.redirect("/books",{book})
        
            if(!err)
            // book.save();
            res.redirect("/authors")
        })
    })

return authorsRouter;
}
module.exports = router;