var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://khyatigoyal:khyatigoyal@cluster0.66s8n.mongodb.net/addverb?retryWrites=true&w=majority'
);

module.exports = { mongoose };
