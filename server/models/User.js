/* eslint consistent-return: 0 */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;
// create a job schema and model
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },

});
UserSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, (e, hash) => {
            if (e) return next(e);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
