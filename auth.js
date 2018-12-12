const bcrypt = require('bcryptjs');
const User = require('./models/User');


exports.authenticate = (email, password) => {
    return new Promise( async (resolve, reject) => {
        try {
            // Get User by e,ail
            const user = await User.findOne({email});
            // Match the Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    resolve(user);
                } else {
                    // Pass didn't match
                    reject('Authentication Failed');
                }
            })
        }catch (err) {
            // Email not found 
            reject('Authentication Failed');
        }
    })
}