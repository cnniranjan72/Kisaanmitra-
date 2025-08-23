const express = require('express');
const router = express.Router();
const { getSustainabilityData, addCertification, addPractice, addCrop, addTraceabilityLog } = require('../controllers/sustainabilityController');
const authMiddleware = require('../middleware/authMiddleware'); // Your existing JWT auth middleware

// All routes here are protected
router.use(authMiddleware);

// @route   GET api/sustainability
// @desc    Get all sustainability data for the logged-in user
router.get('/', getSustainabilityData);

// @route   POST api/sustainability/certification
// @desc    Add a new certification
router.post('/certification', addCertification); // We'll add file handling later

// @route   POST api/sustainability/practice
// @desc    Add a new eco-friendly practice
router.post('/practice', addPractice);

// @route   POST api/sustainability/crop
// @desc    Add a new crop to track
router.post('/crop', addCrop);

// @route   POST api/sustainability/crop/:cropId/log
// @desc    Add a traceability log to a specific crop
router.post('/crop/:cropId/log', addTraceabilityLog);

module.exports = router;