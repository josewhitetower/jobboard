const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK,
    });
}

module.exports = {
    register(req, res, next) {
        User.create(req.body)
            .then((user) => {
                const token = jwtSignUser(req.body);
                res.send({ user, token });
            })
            .catch(next);
    },
    login(req, res) {
        const { email, password } = req.body;
        User.findOne({ email }, (err, user) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            if (!user) {
                return res.send({ error: 'The email was incorrect' });
            }
            return user.comparePassword(password, (e, isMatch) => {
                if (e) throw e;
                if (!isMatch) {
                    return res.send({ error: 'The password  was incorrect' });
                }
                const token = jwtSignUser({ email, password });
                return res.send({ message: 'Welcome...', token, user });
            });
        });
    },
};
