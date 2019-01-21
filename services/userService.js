const User = require('mongoose').model('users');

module.exports = class UserService {
    static async findUserById(userId) {
        return await User.findById(userId);
    }

    static async findOrCreateByGoogleAuth(googleProfile) {
        const existingUser = await User.findOne({ googleId: googleProfile.id });

        if (existingUser) {
            return existingUser;
        }

        return await new User({ googleId: googleProfile.id, email: googleProfile.email }).save();
    }
};