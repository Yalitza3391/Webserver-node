const express= require('express')
const app = express();
const hbs = require('hbs');
const port=process.env.PORT || 3000
require('./hbs/helpers');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

//helpers



app.get('/',(req,res)=>{

res.render('index',{
    nombre:'yAlitza'    
   });
});


app.get('/about',(req,res)=>{

    res.render('about',{
        nombre:'fernando',
        
});
});
app.listen(port,()=>{
    console.log(`puerto ${port}`);
});