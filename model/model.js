
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var taxentrySchema = new Schema({
  Rate: {
    type:String,
    required: 'Kindly enter the rate of the tax'
  },
  restrictionBased: {
    type:String
    
  },
  restrictionOfGti: {
      type: String,    
  },
  applicableFrom:{
type:Date,
  },
  applicableTo:{
    type:Date
  }
});

module.exports = mongoose.model('Tax', taxentrySchema);