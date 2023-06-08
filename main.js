const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize=require('./util/database');

var cors = require('cors');

const adminRoutes = require('./routes/admin');

const app = express();

app.use(cors());


app.set('view engine','ejs')
app.set('views','views')


app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/user',adminRoutes)



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