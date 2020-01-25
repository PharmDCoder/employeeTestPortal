const router = require("express").Router();
const db = require("../models");
const jwt = require('jsonwebtoken');

function signJwt(email, employeeName, employeeId, res) {
    const userDataScrubbed = {};
    userDataScrubbed.email = email;
    userDataScrubbed.employeeName = employeeName;
    userDataScrubbed.id = employeeId;

    jwt.sign(userDataScrubbed, 'privatekey', (err, token) => {
        if (err) { console.log(err) }
        res.send(token);
    });
}

router.route("/api/user").post((req, res, next) => {
    db.User.create(req.body)
        .then(function (employeeResponse) {
            console.log(employeeResponse);
            signJwt(req.body.email, req.body.employeeName, employeeResponse._id, res)
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

router.route("/api/auth").post((req, res, next) => {
    userData = {
        email: req.body.email
    }

    db.User.findOne(userData, function (err, userData) {
        if (err) {
            console.log("ERROR");
        } else if (!userData) {
            res.json({ error: "User Not Found" });
        } else {
            userData.comparePassword(req.body.password, function (err, isMatch) {
                if (err) throw err;
                if (!isMatch) {
                    res.json({ error: "Wrong Password for this user" });
                } else {
                    signJwt(userData.email, userData.employeeName, userData._id, res)
                }
            })
        }
    })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

router.route("/api/currentTests").post((req, res, next) => {
    db.Test.find({})
        .then(function (dbCurrentTests) {
            // If we were able to successfully find Tests, send it back to the client
            res.json(dbCurrentTests);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.send("ERROR");
        });
})

router.route("/api/testRecords/:id").post((req, res, next) => {
    db.User.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("testrecord")
        .then(function (dbTestRecords) {
            const userDataScrubbed = {};
            userDataScrubbed.email = dbTestRecords.email;
            userDataScrubbed.employeeName = dbTestRecords.employeeName;
            userDataScrubbed.id = dbTestRecords._id;
            userDataScrubbed.testrecord = dbTestRecords.testrecord;
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(userDataScrubbed);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.send("ERROR");
        });
})

router.route("/api/addTestRecord/:id").post((req, res, next) => {
    db.TestRecord.create(req.body)
        // ..and populate all of the notes associated with it
        .then(function (dbTestRecords) {

            // If we were able to successfully find an Article with the given id, send it back to the client
            return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { testrecord: dbTestRecords._id } }, { new: true });
        })
        .then(function (dbTestRecords) {

            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbTestRecords);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.send(err);
        });
})


module.exports = router;