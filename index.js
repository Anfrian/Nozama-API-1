const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { application } = require('express');
const userRoute = require('./routes/user');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> {console.log("mongodb");})
    .catch((err)=> {console.log(err);});


app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running at http://localhost:5000');
});