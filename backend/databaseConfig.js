const mysql=require('mysql')
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ananya@123',
    database:'ecom'
})
module.exports=connection
