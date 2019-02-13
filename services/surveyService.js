const Survey = require('mongoose').model('surveys');
const customErrors = require('../helpers/customErrors');

module.exports = class SurveyService {
    static async findById(surveyId) {
        return await Survey.findById(surveyId);
    }

    static async create(user, surveyData) {
        const { title, subject, body, recipients } = surveyData;

        const survey = await new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: user.id,
            dateSent: Date.now()
        }).save();

        // Handle sending email before saving to DB
        
        throw new customErrors.ValidationError('Not enough credit');
    }
};