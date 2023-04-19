// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("webdb", "root", "4r3qcas5", {
//   dialect: "mysql",
//   host: 'localhost',
// });

// const Table = require('./Table')(sequelize);
// module.exports={
//   sequelize:sequelize,
//   table:Table
// }


// // const { config } = require('dotenv');
// // const mysql= require('mysql');
// // const connection = mysql.createConnection({
// //   host:'localhost',
// //   user:'root',
// //   password:'4r3qcas5',
// //   database:'webdb'
// // });

// // connection.connect(err =>{
// //   if(err){
// //     console.log(err);
// //     return err;
// //   }
// //   else{
// //     console.log('database worked');
// //   }
// // })

// //  let query="SELECT * FROM user";

// //  connection.query(query,(err,result,field)=>{
// //   console.log(err);
// //   console.log(result);
// //   console.log(result[0]['name']);
// //  // console.log(field);
// //   return result;
// //  });

// //  connection.end(err=>{
// //   if(err){
// //     console.log(err);
// //     return err;
// //   }
// //   else{
// //     console.log('database stop');
// //   }
// //  })

// // const mysql = require('mysql2/promise');
// // const config = require('./config');

// // async function main(){
// //   const connection = await mysql.createConnection(config);
// //   const [rows, fields] =await connection.execute('select * from user where id_user = 1');
// //   //console.log(rows[0]['name']);
// //   await connection.execute('select * from user where id_user = 1');
// //   //console.log(rows[0]['telephone']);
// //   connection.end();

// //   return rows;
// // }
// //  async function as(){
// //   let func = await main();
// //   console.log(func);
// //  }
// //  as();
