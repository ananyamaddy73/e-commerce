const express=require('express')
const productController=require('../controller/product.controller.js')
const router=express.Router()
const uploads=require('../multerConfig.js')
router.post('/saveData',uploads.single('productImage'),productController.saveData)
router.get('/getData',productController.getData)
router.get('/getDataById/:productId',productController.getDataById)
router.delete('/deleteData/:productId',productController.deleteData)
router.put('/updateData/:productId',uploads.single('productImage'),productController.updateData)

module.exports=router