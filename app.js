const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
connectDB();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);

});