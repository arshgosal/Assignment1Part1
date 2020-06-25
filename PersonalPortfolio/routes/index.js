'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Personal Portfolio', name: 'Arshdeepak Ram' });
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'Personal Portfolio', name: 'Arshdeepak Ram' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Information'});
});

router.get('/Projects', function (req, res) {
    res.render('projects', { title: 'Projects'});
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

module.exports = router;
