const express=require('express');
const productController=require('../controller/product');

const router=express.Router();   

router
   .post('/',productController.createProduct)
   .get('/',productController.getAllProducts)
   .get('/:id',productController.getProduct)
   .put('/:id',productController.replaceProduct)
   .patch('/:id',productController.updateProduct)
   .delete('/:id',productController.deleteProduct);
exports.router=router;



//project user sivaram pw:Sivaram@2003
//database un 