const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    features: {
        type: String,
    },
    userLimit: {
        type: Number
    },
});

const Plan = mongoose.model("plan", planSchema);
module.exports = Plan;