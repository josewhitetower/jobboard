const mongoose = require('mongoose');

const { Schema } = mongoose;
// create a job schema and model
const JobSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title field is required'],
	},
	company: {
		type: String,
		required: [true, 'Company is required'],
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
	},
	published: {
		type: Boolean,
		default: false,
	},
	created: {
		type: Date,
		required: 'Date is required',
		default: Date.now,
	},
	location: {
		type: {
			type: String,
			default: 'Point',
		},
		coordinates: [{
			type: Number,
			required: 'Coordinates are required',
		}],
		address: {
			type: String,
			required: 'Address is required',
		},
	},
	author: {
		type: String,
		required: [true, 'Author is required'],
	},
	applicants: {
		type: Array,
		default: []
	}
});

const Job = mongoose.model('job', JobSchema);

module.exports = Job;
