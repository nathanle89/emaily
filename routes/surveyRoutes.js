const requireLogin = require('../middlewares/requireLogin');
const surveyService = require('../services/surveyService');

module.exports = app => {
    app.post('/api/surveys', requireLogin, async (req, res, next) => {
        try {
            const survey = await surveyService.create(req.user, {});
        } catch (e) {
            next(e)
        }
    })
};