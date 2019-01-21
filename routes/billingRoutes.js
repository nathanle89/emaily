const paymentService = require('../services/paymentService');

module.exports = app => {
    app.post('/api/payments', async (req, res) => {
        const charge = await paymentService.createCharge(req.user, req.body.id);
        res.send(user);
    })
};