const Order = require("../model/order.model");
const stripe = require("../stripe/stripe")

const createOrder = async (req, res) => {
    const { userId, planId, token } = req.body;
    try {

        // const session = await stripe.checkout.sessions.create({
        //     mode: "subscription",
        //     payment_method_types: ["card"],
        //     metadata: {},
        //     line_items: [
        //         {
        //             price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
        //             quantity: 1,
        //         },
        //     ],
        //     success_url: 'http://localhost:5000/success',
        //     cance_url: 'http://localhost:5000/cancel',
        // });

        const charge = await stripe.charges.create({
            amount: 4999, // or dynamically calculate based on plan
            currency: 'inr',
            source: token.id,
            description: 'SaaS Plan Purchase',
        });

        const order = new Order({
            user: userId,
            plan: planId,
            amount: charge.amount,
            status: 'completed'
        });
        await order.save();

        res.status(200).send({
            success: true,
            message: "Order placed"
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
    createOrder
}