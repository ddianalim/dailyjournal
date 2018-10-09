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
  // TODO
});

// Days edit
router.get('/:id/edit', auth.requireLogin, (req, res, next) => {
  // TODO
});

// Days update
router.post('/:id', auth.requireLogin, (req, res, next) => {
  // TODO
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
