const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub-document for certifications
const CertificationSchema = new Schema({
    name: { type: String, required: true, enum: ['Organic', 'Fair Trade', 'Rainforest Alliance'] },
    fileUrl: { type: String, required: true }, // URL to the uploaded certificate PDF/image
    issuedDate: { type: Date, required: true },
    expiryDate: { type: Date },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

// Sub-document for eco-friendly practices
const PracticeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    dateImplemented: { type: Date, default: Date.now }
});

// Sub-document for crop traceability
const TraceabilityLogSchema = new Schema({
    stage: { type: String, required: true }, // e.g., 'Seeding', 'Fertilizing', 'Harvest'
    details: { type: String },
    date: { type: Date, default: Date.now }
});

const CropSchema = new Schema({
    name: { type: String, required: true },
    plantingDate: { type: Date, required: true },
    traceabilityHistory: [TraceabilityLogSchema]
});

// Main Sustainability Schema
const SustainabilitySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to your existing User model
        required: true,
        unique: true
    },
    certifications: [CertificationSchema],
    practices: [PracticeSchema],
    crops: [CropSchema],
    badges: [{ type: String }] // Simple array of badge names, e.g., ['Water Saver', 'Certified Organic']
}, { timestamps: true });

module.exports = mongoose.model('Sustainability', SustainabilitySchema);