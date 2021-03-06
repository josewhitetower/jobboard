require('dotenv').config({ path: './../../.env' });
const mongoose = require('mongoose');

module.exports = {
	database: {
		mongoose,
		connect: () => {
			mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true });
		},
		disconnect: (done) => {
			mongoose.disconnect(done);
		},
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET,
	},
	env: process.env.ENV,
};
