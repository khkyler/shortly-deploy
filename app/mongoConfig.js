var mongo = require('mongodb');
var mongoose = require('mongoose');

var mongoConfig =  mongoose.connection;

// mongo.on('error', console.error);
// mongo.once('open', function(){
//   console.log('Database open', []);
// });


exports.User = mongoose.model('User', userSchema);





mongoose.connect(process.env.DATABASE || 'mongodb://localhost');
module.exports = mongoConfig;
