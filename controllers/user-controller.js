// var express = require('express');
const router = require("express").Router();
let User = require("../db").import("../models/user"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//SIGNUP
router.post('/signup', function(req, res) {
    User.create({
        username: req.body.user.username,
        passwordHash: bcrypt.hashSync(req.body.user.passwordHash, 13)
    })
    .then(
        function userSuccess(user) {
            let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*48});
            res.json({
                username: user,
                message: "User successfully created",
                sessionToken: token
            })
           
        }
    ) .catch(err => res.send(err))
});
//LOGIN
router.post('/login', function(req, res) {
    User.findOne({
        where: {
            username: req.body.user.username
        }
    })
    .then(function loginSuccess(user) {
        if (user) {
            bcrypt.compare(req.body.user.passwordHash, user.passwordHash, function(err, matches) {
                if (matches) {
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*48})
                    res.status(200).json({
                        user: user,
                        message: "User successfully logged in",
                        sessionToken: token
                    })
                }
                else {
                    res.status(502).send({error: "Login Failed"});
                }
            })
        }
        else {
            res.status(500).json({err: error})
        }
    })
});
module.exports = router;