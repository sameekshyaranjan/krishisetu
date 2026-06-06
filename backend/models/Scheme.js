const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide the scheme title']
  },
  description: {
    type: String,
    required: [true, 'Please provide the scheme description']
  },
  department: {
    type: String
  },
  beneficiaries: {
    type: String
  },
  link: {
    type: String,
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Please provide a valid URL']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Scheme = mongoose.model('Scheme', schemeSchema);

module.exports = Scheme;
