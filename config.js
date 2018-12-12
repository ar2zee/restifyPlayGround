const {name, pass} = require('./sensativeData');

module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || `mongodb://${name}:${pass}@ds131954.mlab.com:31954/customer_api_restify_course`
}