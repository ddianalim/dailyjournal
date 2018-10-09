const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Day = require('../models/day');

// Days index
router.get('/', (req, res, next) => {
  Day.find({}, 'description', function(err, days) {
    if(err) {
      console.error(err);
    } else {
      res.render('days/index', { days: days });
    }
  });
});

// Days new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('days/new');
});

// Days show
router.get('/:id', auth.requireLogin, (req, res, next) => {
  Day.findById(req.params.id, function(err, day) {
    if(err) { console.error(err) };

    res.render('days/show', { day: day });
  });
});

// Days edit
router.get('/:id/edit', auth.requireLogin, (req, res, next) => {
  Day.findById(req.params.id, function(err, day) {
    if(err) { console.error(err) };

    res.render('days/edit', { day: day });
  });
});

// Days update
router.post('/:id', auth.requireLogin, (req, res, next) => {
  Day.findByIdAndUpdate(req.params.id, req.body, function(err, day) {
    if(err) { console.error(err) };

    res.redirect('/days/' + req.params.id);
  });
});

// Days create
router.post('/', auth.requireLogin, (req, res, next) => {
  let day = new Day(req.body);

  day.save(function(err, day) {
    if(err) { console.error(err) };

    return res.redirect('/days');
  });
});

module.exports = router;
