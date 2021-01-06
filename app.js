const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const nav =  [
    {link:'/signup',name:'Sign Up'},
    {link:'/login',name:'Login'},
    {link:'/books',name:'books'},
    {link:'/authors',name:'Authors'},
    
    {link:'/admin',name:'Add Book'},
{link:'/admin/author',name:'Add Author'},
{link:'/',name:'Logout'}
    ];
const booksRouter = require('./src/routes/booksRouter.js')(nav);
const authorsRouter=require('./src/routes/authorsRouter.js')(nav);
const loginRouter=require('./src/routes/loginRouter.js')(nav);
const SignupRouter=require('./src/routes/SignupRouter.js')(nav);
const newadditionRouter=require('./src/routes/newadditionRouter.js')(nav);
const adminRouter=require('./src/routes/adminRouter.js')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',SignupRouter);
app.use('/addNew',newadditionRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
});
});


app.listen(port,()=>{console.log("server ready at"+port)});