const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const multer = require('multer');
const config = require('../config/config.js');
const JobController = require('../controllers/JobController');
const AuthenticationController = require('../controllers/AuthenticationController');
const Job = require('../models/Job');

const prod = false;

const connect = prod
    ? `mongodb://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.database}`
    : `mongodb://${config.db.host}/${config.db.database}`;


mongoose.connect(connect);

mongoose.Promise = global.Promise;

router.post('/add', JobController.add);
router.post('/register', AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.get('/jobs', JobController.jobs);
router.get('/jobs/:id', JobController.show);
router.put('/jobs/:id', JobController.edit);
router.delete('/jobs/:id', JobController.delete);
router.get('/', (req, res, next) => {
    Job.find({})
        .then((jobs) => {
            res.send(jobs);
        })
        .catch(next);
});

module.exports = router;
