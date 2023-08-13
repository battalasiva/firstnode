const fs = require('fs');
//const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products=data.products;
const Product=require('../model/product');
//const Product=model.Product;

exports.createProduct = (req,res)=>{
    const product=new Product(req.body);
    // product.title='realme';
    // product.price=19999;
    // product.rating=5;
    // product.save((err,doc)=>{
    //     console.log({err,doc})
    // })
    product.save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating product' });
    });
};

exports.getAllProducts = async(req,res)=>{
    const products= await Product.find(); 
    res.json(products);
};

exports.getProduct = async (req,res)=>{
    const id= req.params.id;   
    const product=await Product.findById(id);
    res.json(product);
};
exports.replaceProduct = async (req,res)=>{
    const id= req.params.id;
    // const productIndex=products.findIndex((p)=>p.id===id);
    // products.splice(productIndex,1,{...req.body,id:id});
    try{
        const product=await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(product);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
};
exports.updateProduct =async (req,res)=>{
    // const id= req.params.id;
    // const productIndex=products.findIndex((p)=>p.id===id);
    // const product=products[productIndex];
    // products.splice(productIndex,1,{...product,...req.body});
    // res.status(201).json(); 
    const id=req.params.id;
    try{
        const product=await Product.findByIdAndUpdate({_id:id},req.body,{new:true});
        req.status(201).json(product);
    } 
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
};
exports.deleteProduct = async(req,res)=>{
    // const id= req.params.id;
    // const productIndex=products.findIndex((p)=>p.id===id);
    // const product = products[productIndex];
    // products.splice(productIndex,1);
    // res.status(201).json(product);  
    const id=req.params.id;
    try{
        const product=await Product.findByIdAndDelete({_id:id});
        req.status(201).json(product);
    }
    catch(err){
        console.log(err);
        res.status(401).json(err);
    }
};