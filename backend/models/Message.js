const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Message must have a sender'],
    refPath: 'senderModel'
  },
  senderModel: {
    type: String,
    required: true,
    enum: ['Farmer', 'Trader', 'Admin']
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Message must have a receiver'],
    refPath: 'receiverModel'
  },
  receiverModel: {
    type: String,
    required: true,
    enum: ['Farmer', 'Trader', 'Admin']
  },
  cropId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop'
  },
  content: {
    type: String,
    required: [true, 'Message content cannot be empty']
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

messageSchema.index({ senderId: 1, receiverId: 1 });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
