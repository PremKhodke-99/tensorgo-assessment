require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConfig = require('./db/dbConfig');
const planRouter = require("./routes/plan.routes");
const userRouter = require("./routes/user.routes");
const orderRouter = require("./routes/order.routes");

dbConfig();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/plan', planRouter);
app.use('/api/order', orderRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
