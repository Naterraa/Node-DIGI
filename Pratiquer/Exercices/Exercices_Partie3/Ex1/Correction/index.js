const express = require("express");
const app = express();
const { connectDB } = require("./db/sequelize/db");

const taskRouter = require("./router/taskRouter");
const listRouter = require("./router/listRouter");

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Database
connectDB();

// Routes
app.use("/tasks", taskRouter);
app.use("/lists", listRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
