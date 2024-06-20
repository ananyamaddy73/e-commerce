const db=require('../databaseConfig.js')

exports.saveData=(req,res)=>{
    let productBrand =req.body.productBrand
    let productType =req.body.productType
    let productPrice =req.body.productPrice
    let productRating =req.body.productRating
    let productImage =req.file.filename
    let value=[[productBrand,productType,productPrice,productRating,productImage]]
    let sql='insert into product(productBrand,productType,productPrice,productRating,productImage) values ?'
    db.query(sql,[value],(err,result)=>{
        if (err) throw err
        else{
            res.send('data saved')
        }
    })
}

exports.getData=(req,res)=>{
    let sql='select * from product '
    db.query(sql,(err,result)=>{
        if (err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteData=(req,res)=>{
    let productId = req.params.productId
    let sql='delete from product where productId= ? '
    db.query(sql,[productId],(err,result)=>{
        if (err) throw err
        else{
            res.send('data deleted')
        }
    })
}

exports.updateData=(req,res)=>{
    let productId= req.params.productId
    let newData=req.body
    console.log(newData)
    let sql='update product set ? where productId =?'
    db.query(sql,[newData,productId],(err,result)=>{
        if (err) throw err
        else{
            res.send('data updated')
        }
    })
}
exports.getDataById=(req,res)=>{
    let productId=req.params.productId
    let sql='select * from product where productId=?'
    db.query(sql,[productId],(err,result)=>{
        if(err) throw err
        else{
         res.json(result)
        }
    })
}