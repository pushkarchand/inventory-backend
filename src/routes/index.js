const userRoutes=require("./user-routes");
const authRoutes=require("./auth-routes");
const productRoutes=require('./product-routes');
module.exports = (app) => {
    app.use('/user',userRoutes);
    app.use('/product',productRoutes);
    app.use('/auth',authRoutes);
};

