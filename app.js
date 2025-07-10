const express = require("express");
const app = express();
const dbconnect = require('./config/db.config');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require("dotenv").config();

// ROUTES
const productRouter = require("./routes/product.routes");
const cartRouter = require("./routes/cart.routes");
const categoryRouter = require("./routes/category.routes");
const subcategoryRouter = require("./routes/subcategory.routes");
const UserRegistration = require("./routes/RegistartionRoute");
const orderRouter = require("./routes/order.routes");
const paymentRouter = require("./routes/payment.routes");
const purchaseproduct = require("./routes/purchase.routes");
const adminlogin = require("./routes/admin.routes");
const Contact = require("./routes/Contactroutes");
const BrandRoute = require("./routes/BrandRoute");
const UserRoute = require("./routes/userRoute");
const BannerRoute = require("./routes/BannerRoute");
const LoginRoute = require("./routes/userRoute"); // This and UserRoute are same?
const CheckRoute = require("./routes/Checkoutroute");
const PaymentRoute = require("./routes/paymentRoute");

// ✅ CORS CONFIGURATION
const corsOptions = {
  origin: [
    "http://umairabaya.com",
    "https://your-frontend-domain.com"
], // Add your frontend URLs here
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ DATABASE CONNECTION
dbconnect();

// ✅ MIDDLEWARES
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTE HANDLERS
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/category', categoryRouter);
app.use('/subcategory', subcategoryRouter);
app.use('/user', UserRegistration); // Consider renaming or merging with below if same
app.use('/order', orderRouter);
app.use('/payments', paymentRouter);
app.use('/purchase', purchaseproduct);
app.use('/admin', adminlogin);
app.use('/contact', Contact);
app.use('/brand', BrandRoute);
app.use('/user', UserRoute);        // Same as /user above?
app.use('/banner', BannerRoute);
app.use('/auth', LoginRoute);
app.use('/paymentuser', PaymentRoute);
app.use('/checkout', CheckRoute);   // You were missing this line

// ✅ SERVER START
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
