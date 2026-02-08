const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES IMPORT
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

// ROUTES USE
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo Connected"))
.catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, ()=>{
 console.log("Server running on port 5000");
});