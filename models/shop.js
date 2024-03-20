const mongoose = require('mongoose');

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
      default: true
    },
    reviews: [reviewSchema]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Shop', shopSchema);