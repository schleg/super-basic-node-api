var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ModelSchema = new Schema({
  name: String
});
module.exports = Mongoose.model('Model', ModelSchema);
