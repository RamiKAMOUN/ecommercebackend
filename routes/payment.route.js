const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('sk_test_51NnLvRCT7slh2LtZlnzUTy9AEtdb3S7xT9gd5X2nKvuQEfroWuK1qFwQSszwJZgBcFveFiCZEy2hLGUHdBmXG1dO00Ai43Wwsz');
router.post('/', async (req, res) => {
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;