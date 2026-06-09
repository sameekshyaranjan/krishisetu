const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  action: {
    type: String,
    required: [true, 'Action description is required']
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'performedByModel'
  },
  performedByModel: {
    type: String,
    enum: ['Admin', 'Farmer', 'Trader']
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId
  },
  targetModel: {
    type: String
  },
  details: {
    type: mongoose.Schema.Types.Mixed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;
