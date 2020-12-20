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
return authorsRouter;
}
module.exports = router;