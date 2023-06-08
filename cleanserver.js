const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize=require('./util/database');

const User = require('./models/booking');

var cors = require('cors');


const app = express();

app.use(cors());


app.set('view engine','ejs')
app.set('views','views')


app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.post('/add-expense',async(req,res,next)=>{
    // try{
        // if(!req.body.number){
        //     throw new Error('Phone number is Manadatory');
        // }
        const expense = req.body.exp;
        const category = req.body.cat;
        const description = req.body.desc;
        const data = await User.create({amount:expense,description:description,category:category});
        console.log(data);
        res.status(201).json({newExpense:data});
    // }catch(err){
    //     console.log("backend err");
    //     res.status(500).json({
    //         error:err
    //     })
    // }
})



app.get('/get-expense',async(req,res,next)=>{
    // try{
        const users = await User.findAll();
        console.log(users);
        res.status(200).json({allExpense:users});
    // }
    // catch(err){
    //     console.log('get user is failed',JSON.stringify(err))
    //     res.status(500).json({error:err})
    // }
})

app.delete('/delete-expense/:id',async(req,res,next)=>{
    // try{
        if(req.params.id == 'undefined'){
            console.log("ID is Missing");
            return res.status(400).json({err:"ID is Missing"})
        }
        const userId = req.params.id;
        await User.destroy({where:{id:userId}});
        res.status(200)
    // }
    // catch(err){
    //     res.status(500).json({error:err})
    // }
});

app.use(errorController.get404)

sequelize.sync()
.then(result=>{
    // console.log(result);
    app.listen(3000)
})
.catch(err=>{console.log(err)});


























// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cartitem');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');


// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const { resourceUsage } = require('process');
// // const OrderItem = require('./models/order-item');
// // const { USE } = require('sequelize/types/index-hints');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use((req,res,next)=>{
//     User.findByPk(1)
//     .then(user=>{
//         req.user=user;
//         next();
//     })
//     .catch(err=>{
//         console.log(err);
//     });
// });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// Product.belongsTo(User,{
//     constraints:true,
//     onDelete:'CASCADE'
// });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product,{through:CartItem});
// Product.belongsToMany(Cart,{through:CartItem});
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product,{through:OrderItem})

// sequelize
// // .sync({force:true})
// .sync()
// .then(result=>{
//     return User.findByPk(1);
// })
// .then(user=>{
//     if(!user){
//         return User.create({name:'Himanshu',email:'himanshu@gmail.com'});
//     }
//    return user;
// })
// .then(user=>{
//     // console.log(user);
//     return user.createCart();
// })
// .then(cart=>{
//     app.listen(3000);
// })
// .catch(err=>{
//     console.log(err);
// })



// {"image":"https://i.ibb.co/cLV4RvX/google-pixel-3.jpg",
// {"image":"https://i.ibb.co/160YSpk/mi-redmi-5.jpg"
// {"image":"https://i.ibb.co/y6dk6n1/mi-redmi-y2.jpg"
// {"image":"https://i.ibb.co/McQMDF8/motorola-moto-e5-plus.jpg",
// {"image":"https://i.ibb.co/1QGFW28/nokia-6-1.jpg",
// {"image":"https://i.ibb.co/vJbK6qM/realme-c1.jpg",
// {"image":"https://i.ibb.co/F6c80H6/realme-x.jpg","
// ,{"image":"https://i.ibb.co/TWLNRyW/samsung-galaxy-s10-plus.jpg"
// {"image":"https://i.ibb.co/ScZsMtW/vivo-z1-pro.jpg"