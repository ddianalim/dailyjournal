const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model('Day', DaySchema);
