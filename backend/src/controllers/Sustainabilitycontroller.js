const Sustainability = require('../models/Sustainability');

// Get all sustainability data for a user
exports.getSustainabilityData = async (req, res) => {
    try {
        // req.user.id is added by your authMiddleware
        let data = await Sustainability.findOne({ user: req.user.id });
        if (!data) {
            // If no data exists, create a new entry for the user
            data = await Sustainability.create({ user: req.user.id });
        }
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add a new certification
exports.addCertification = async (req, res) => {
    const { name, issuedDate, expiryDate } = req.body;
    // Note: We need to handle file upload to get the fileUrl. See Step 5.
    const fileUrl = 'path/to/placeholder-file.pdf'; // Placeholder for now

    try {
        const sustainabilityProfile = await Sustainability.findOne({ user: req.user.id });
        sustainabilityProfile.certifications.push({ name, fileUrl, issuedDate, expiryDate });
        
        // Logic to award a badge
        if (name === 'Organic' && !sustainabilityProfile.badges.includes('Certified Organic')) {
            sustainabilityProfile.badges.push('Certified Organic');
        }

        await sustainabilityProfile.save();
        res.json(sustainabilityProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add a new eco-friendly practice
exports.addPractice = async (req, res) => {
    const { name, description } = req.body;
    try {
        const sustainabilityProfile = await Sustainability.findOne({ user: req.user.id });
        sustainabilityProfile.practices.push({ name, description });
        await sustainabilityProfile.save();
        res.json(sustainabilityProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add a new crop for traceability
exports.addCrop = async (req, res) => {
    const { name, plantingDate } = req.body;
    try {
        const sustainabilityProfile = await Sustainability.findOne({ user: req.user.id });
        sustainabilityProfile.crops.push({ name, plantingDate });
        await sustainabilityProfile.save();
        res.json(sustainabilityProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add a log to a crop's traceability history
exports.addTraceabilityLog = async (req, res) => {
    const { stage, details } = req.body;
    const { cropId } = req.params;
    try {
        const sustainabilityProfile = await Sustainability.findOne({ user: req.user.id });
        const crop = sustainabilityProfile.crops.id(cropId);
        if (!crop) {
            return res.status(404).json({ msg: 'Crop not found' });
        }
        crop.traceabilityHistory.push({ stage, details });
        await sustainabilityProfile.save();
        res.json(sustainabilityProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};