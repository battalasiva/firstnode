require('dotenv').config()
const express=require('express');
const morgan=require('morgan');
const mongoose = require('mongoose');
//const {MongoClient}=require('mongodb');
const cors=require('cors');
const server=express(); 
const path=require('path')
const productRouter=require('./routes/product')
console.log('env',process.env.DB_PASSWORD)

server.use(express.static(path.join(__dirname,'../pro/spo/build')))
//body parser
server.use(cors())
server.use(express.json())
server.use(morgan('default'))
server.use(express.static('process.env.PUBLIC_DIR'))
server.use('/products',productRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'build','index.html'))
})


//database connectivity
main()

function main(){
  mongoose.connect(`mongodb+srv://sivaram:sivaram@cluster0.4k06xp9.mongodb.net/ecommerceDatabase`)
  .then(() => console.log('connected'))
  .catch((error) => console.log(error.message))
  //mongodb://127.0.0.1:27017/ecommerce
}



//model 

//middleware
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname)
//     next();
// })
//types of middlewares
// server.use(express.json());
// server.use(express.static('public'));
//authuntication using middleware and query  
// const auth = (req,res,next) =>{
//     console.log(req.query);
//     if(req.query.password == '123'){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }
 
//


//MVC   

//api-route
//read GET /products  C R U D
// server.get('/products',(req,res)=>{
//     res.json(products)
// })
// server.get('/products/:id',(req,res)=>{
//     const id= +req.params.id;   
//     const product=products.find(p=>p.id===id)
//     res.json(product);
// })

// //create data   POST   /products
// server.post('/products',(req,res)=>{
//     products.push(req.body);
//     res.status(201).json(req.body);
// })    

// //update using PUT /product/id
// server.put('/product/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id);
//     products.splice(productIndex,1,{...req.body,id:id});
//     res.status(201).json();  
// })  

// //update using PATCH /product/id
// server.patch('/product/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id);
//     const product=products[productIndex];
//     products.splice(productIndex,1,{...product,...req.body});
//     res.status(201).json();  
// })  

// //delelte using DELETE /product/id
// server.delete('/product/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id);
//     const product = products[productIndex];
//     products.splice(productIndex,1);
//     res.status(201).json(product);  
// })  
const port=process.env.PORT || 3000;
server.listen(port,()=>{
    console.log('server started'); 
});

  