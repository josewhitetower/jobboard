const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const config = require('../config/config.js');
const JobController = require('../controllers/JobController');
const Job = require('../models/Job');

const databaseConfig = config.database;
databaseConfig.connect();


mongoose.Promise = global.Promise;

router.post('/add', JobController.add);
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
