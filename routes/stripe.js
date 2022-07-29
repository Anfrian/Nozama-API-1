const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: re.body.amount,
            currency: "usd",
        }, (strpeErr, stripeRes) => {
            if (strpeErr) {res.status(500).json(strpeErr);}
            else {
                res.status(200).json(stripeRes);
            }
        });
});


module.exports = router;