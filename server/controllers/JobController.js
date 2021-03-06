const Job = require('../models/Job');

module.exports = {
    async add(req, res, next) {
        console.log(req.body);
        await Job.create(req.body)
            .then((job) => {
                res.send(job);
            })
            .catch(next);
    },
    async jobs(req, res, next) {
        if (req.query.search) {
            await Job.find({
                $or: [
                    { title: new RegExp(req.query.search, 'i') },
                    { company: new RegExp(req.query.search, 'i') },
                    { description: new RegExp(req.query.search, 'i') }],
            })
                .then((jobs) => {
                    res.send(jobs);
                })
                .catch(next);
            console.log(req.query.search);
        } else {
            await Job.find({})
                .then((jobs) => {
                    res.send(jobs);
                })
                .catch(next);
        }
    },
    async show(req, res) {
        await Job.findById(req.params.id)
            .then((job) => {
                res.send(job);
            })
            .catch(err => res.send({ error: err }));
    },
    async edit(req, res) {
        await Job.findByIdAndUpdate(req.params.id, req.body)
            .then((job) => {
                res.send(job);
            })
            .catch(err => res.send({ error: err }));
    },
    async delete(req, res) {
        await Job.findByIdAndRemove(req.params.id).then((job) => {
            res.send(job);
        });
    },

    async apply(req, res, next) {
        await Job.findById(req.body.job)
            .then((job) => {
                let message;
                if (!job.applicants.includes(req.body.user)) {
                    job.applicants.push(req.body.user);
                    message = 'Applied';
                } else {
                    job.applicants = job.applicants
                        .filter(applicants => applicants !==req.body.user);
                    message = 'Unapplied';
                }
                job.save();                    
                res.send({message , job});
            })
            .catch(err => res.send({ error: err.message }));
    }
};
