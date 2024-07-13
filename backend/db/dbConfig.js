const mongoose = require('mongoose');

const dbConfig = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("DB Conntected Successfully"))
        .catch((err) => console.error("DB connection failed", err));
}

module.exports = dbConfig;