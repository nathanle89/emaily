module.exports = {
    google: {
        id: process.env.GOOGLE_ID,
        secret: process.env.GOOGLE_SECRET
    },
    database: {
        host: process.env.DATABASE_HOST
    },
    cookie: {
        key: process.env.COOKIE_KEY
    },
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY
    }
};