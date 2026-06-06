const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: [true, 'Crop must belong to a farmer']
  },
  name: {
    type: String,
    required: [true, 'Please provide the crop name']
  },
  category: {
    type: String,
    enum: ['vegetables', 'fruits', 'grains', 'spices', 'pulses', 'other'],
    required: [true, 'Please provide a category']
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide the quantity']
  },
  unit: {
    type: String,
    enum: ['kg', 'quintal', 'tonne'],
    default: 'quintal'
  },
  basePrice: {
    type: Number,
    required: [true, 'Please provide a base price (minimum expected price)']
  },
  description: {
    type: String
  },
  images: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['available', 'sold', 'removed'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
