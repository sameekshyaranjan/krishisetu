const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Review must have a reviewer'],
    refPath: 'reviewerModel'
  },
  reviewerModel: {
    type: String,
    required: true,
    enum: ['Farmer', 'Trader']
  },
  revieweeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Review must have a target (reviewee)'],
    refPath: 'revieweeModel'
  },
  revieweeModel: {
    type: String,
    required: true,
    enum: ['Farmer', 'Trader']
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
reviewSchema.index({ reviewerId: 1, revieweeId: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
