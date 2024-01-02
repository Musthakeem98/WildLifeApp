const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema(
  {
    complaintId: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    location: [
      {
        district: { type: String, required: true },
        landmark: { type: String },
        additionalInfo: { type: String },
      }
    ],
    evidences: { type: String, required: true },
    status: { type: Number },
    complaintNote: { type: String },
  },
  { timestamps: true }
);

const ComplaintModel = mongoose.model('Complaint', ComplaintSchema);

module.exports = ComplaintModel;
