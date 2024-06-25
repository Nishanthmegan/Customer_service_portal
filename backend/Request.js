const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  message: String,
  status: String
});

module.exports = mongoose.model('Request', requestSchema);
