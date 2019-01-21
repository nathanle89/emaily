const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.secretKey);

module.exports = class PaymentService {
    static async createCharge(user, token) {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credit',
            source: token
        });

        user.credits += 5;
        await user.save();

        return charge
    }
};