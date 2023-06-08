
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    amount:Sequelize.INTEGER,
    description:Sequelize.STRING,
    category:Sequelize.STRING,
});


module.exports = User;




















// const fs=require('fs');
// const path=require('path');

// const p= path.join(path.dirname(process.mainModule.filename),'data','form.json');

// const getFormsFromFile = cb=>{
//     fs.readFile(p,(err,fileContent)=>{
//         if(err){
//             cb([]);
//         }else{
//             cb(JSON.parse(fileContent));
//         }
//     });
// }
// const db = require('../util/database')

// module.exports = class Form{
//     constructor(n,m,e){
//         this.name=n;
//         this.number=m;
//         this.email=e;
//     }

//     save(){
//         //console.log(this.name,this.number,this.email);
//        return db.execute('INSERT INTO user (name,number,email) VALUES (?, ?, ?)',[this.name,this.number,this.email]);
//     }

//     static Delete(id){
//         console.log(id);
//         return db.execute('DELETE FROM user WHERE user.id = ?',[id]);
//     }

//     static fetchAll(){
//        return db.execute('SELECT * FROM user')
//     }

//     static findById(id){
//         return db.execute('SELECT * FROM user WHERE user.id = ?',[id]);
//     }
// }