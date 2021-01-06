const express = require('express');
const Bookdata = require('../model/Bookdata');
const booksRouter = express.Router();
function router(nav){
// var books=[
    // {
    //     title : 'Thousand Splendid Suns',
    //     Author :'Khalid Hossini',
    //     genere : 'Fiction',
    //     img:"tss.jpg"
    // },
    // {
    //     title : 'The Girl on the Train',
    //     Author :'Paula Hawkins',
    //     genere : 'Mystery Fiction',
    //     img:'GOT.jpg'
    // },
    //     {
    //         title : 'The Diary Of A Young Girl',
    //         Author :'Anne Frank',
    //         genere : 'Non-fiction',
    //         img:'daf.jpg'
    // }]

booksRouter.get('/',function(req,res){
    Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                        title:'Library',
                        books
                    });
                })
        });
    


booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            nav,
            title:'Library',
            book
        });
    })
    
});
booksRouter.get('/delete/:id',function(req,res)
{
const id= req.params.id;
// var condition={"_id":id};
Bookdata.deleteOne({_id: id})
    .then(function(){
    res.redirect("/books")
        
        
     })
  

});

 //GET Book details for UPDATE "/books/update/<%=books[i]._id%>"
 booksRouter.get("/update/:id",function(req,res)
    {
    const book_id = req.params.id;
    const book =  Bookdata.findById(book_id);

    // Bookdata.findOne({_id: id})
    // // .then(function(book){
       
        res.render('updateBook' ,{
            nav,
            title:'Library',
            id : book_id,
            book
        });
    // const book =  Bookdata.findById(book_id);

    // res.render('updateBook',{
    //     nav,
    //     title:'Update book',
    //     books
    }) 


//POST Book details for UPDATE
booksRouter.post('/update/:id', function(req,res){
    const book_id  = req.params.id;
    var item={
        title: req.body.title,
        author: req.body.author,
        genere: req.body.genere,
        image: req.body.image
    }
    var book= Bookdata(item);
    
    

    // var book = Bookdata(book_item);
    Bookdata.findByIdAndUpdate(req.params.id, book, {}, function (err,result) {
        if (err) { return console.log(error);}
        
           //redirect to book detail
           res.redirect('/books');
        });
});

// booksRouter.get('/update/:id',function(req,res)
//     {
        
//       res.render('updateBook',{
//           nav,title:"Update Book"
//       })
//     })
    // booksRouter.put('/:id/update',function (req,res)
    // {
        
    //         var item={
    //             title: req.body.title,
    //             author: req.body.author,
    //             genere: req.body.genere,
    //             image: req.body.image
    //         }
    //         var book= Bookdata(item);
           
    //     const id=req.params.id;
    //     Bookdata.findOneAndUpdate({_id:req.body.id},book,{new:true},(err,Bookdata)=>{
    //         if(!err){
    //         // book.title =req.body.title;
    //         // book.author = req.body.author;
    //         // book.genere = req.body.genere;
    //         // book.image = req.body.image;
            
    //            book.update();
    //             // book.save();
    //             res.redirect("/books")
    //         }
    //         else{
    //             console.log("Error");
    //         }
    //     })
    // })
            
return booksRouter;
}
module.exports = router;