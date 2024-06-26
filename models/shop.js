const mongoose = require('mongoose');
const shops = require('../controllers/shops');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
      type: String,
      required: true
  },
  rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
  } 
}, {
  timestamps: true
})

const shopSchema = new Schema({
  restaurant: {
    type: String,
    required: true
  },
    hoursOpen: {
      type: String,
      required: true
    },
    ramen: [String],
    delivers: {
      type: Boolean,
      default: false
    },
    reviews: [reviewSchema]
  }, {
    timestamps: true
  });

  // function deleteOne(id) {
  //   id = parseInt(id)
  //   const idx = shops.findIndex(shop => shop.id ===id)
  //   shops.splice(idx, 1)
  // }

  module.exports = mongoose.model('Shop', shopSchema,);