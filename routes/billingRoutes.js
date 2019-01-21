const paymentService = require('../services/paymentService');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/payments', requireLogin, async (req, res) => {
        await paymentService.createCharge(req.user, req.body.id);
        res.send(req.user);
    })
};