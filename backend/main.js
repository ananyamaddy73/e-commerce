const express=require('express')
const db=require('./databaseConfig.js')

const productRouter=require('./routes/product.routes.js')
const app=express()
app.use(express.json())
let hostname='127.0.0.1'
const dotenv=require('dotenv')
const cors=require('cors')
app.use(cors())
dotenv.config({
    path:'./.env'
})
app.use(express.static('uploads'))
app.use(express.static('public'))
db.connect((err)=>{
    if(err) throw err
    else{
        console.log('database connected')
    }
})
let tablequery=`CREATE TABLE IF NOT EXISTS product(
    productId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    productBrand VARCHAR(255),
    productType VARCHAR(255),
    productPrice VARCHAR(255),
    productRating VARCHAR(255),
    productImage VARCHAR(255)
);`
db.query(tablequery,(err,result)=>{
if(err) throw err
else{
    console.log('table created')
}
})
app.use('/api',productRouter)
app.listen(process.env.PORT,hostname, ()=>{
console.log(`http://${hostname}:${process.env.PORT}`)
})



