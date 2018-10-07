const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Day = require('../models/day');

// Days index
router.get('/', (req, res, next) => {
  // TODO
});

// Days new
router.get('/new', auth.requireLogin, (req, res, next) => {
  // TODO
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
  // TODO
});

module.exports = router;
