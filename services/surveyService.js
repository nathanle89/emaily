const User = require('mongoose').model('surveys');
const customErrors = require('../helpers/customErrors');

module.exports = class SurveyService {
    static async findById(surveyId) {
        return await Survey.findById(surveyId);
    }

    static async create(user, googleProfile) {
        throw new customErrors.ValidationError('Not enough credit');
    }
};