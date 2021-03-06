var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,

  },
  
    price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
    quantity: {
    type: Number,
    trim: true,
    default :'1', // use min,mix command for specifications
    required: 'Quantity required'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;