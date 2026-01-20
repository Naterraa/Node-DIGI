const express = require("express");
const app = express();
const { connectDB } = require('./db/sequelize/db');
const routerComputer = require('./router/routerComputer');

// Important utiliser json 
app.use(express.json());

// Initialiser la BDD
connectDB();

app.use('/api/computer', routerComputer);



app.listen(3000, () => { console.log("Server is running on port 3000 http://localhost:3000"); })
