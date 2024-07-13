const Plan = require("../model/plan.model");

const createPlan = async (req, res) => {
    const { name, price, description, features, userLimit } = req.body;

    try {
        const newPlan = new Plan({
            name,
            price,
            description,
            features,
            userLimit
        });
        await newPlan.save();
        res.status(200).send({
            success: true,
            message: "New plan created",
            newPlan
        });
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).send({
            success: false,
            message: "Server error"
        })
    }
}

const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).send(plans);
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).send({
            success: false,
            message: "Server error"
        })
    }
}

const updatePlan = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, features, userLimit } = req.body;

    let plan
    try {
        plan = await Plan.findByIdAndUpdate(id, {
            name,
            price,
            description,
            features,
            userLimit
        });
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).send({
            success: false,
            message: "Server error"
        })
    }

    if (!plan) {
        res.status(404).send({
            success: false,
            message: "Plan not found"
        })
    }

    res.status(200).send({
        success: true,
        message: "Plan updated",
        plan
    })
}

const deletePlan = async (req, res) => {
    const { id } = req.params;
    try {
        await Plan.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Plan deleted"
        })
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).send({
            success: false,
            message: "Server error"
        })
    }
}

module.exports = {
    createPlan,
    getAllPlans,
    updatePlan,
    deletePlan
}