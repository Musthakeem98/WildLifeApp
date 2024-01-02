const express = require('express');
const router = express.Router();
const ComplaintSchema = require('../models/complaint');

// Create a complaint
router.post('/', async (req, res) => {
  try {
    const newComplaint = new ComplaintSchema({
      complaintId: req.body.complaintId,
      department: req.body.department,
      description: req.body.description,
      location: req.body.location,
      evidences: req.body.evidences,
      status: req.body.status,
      complaintNote: req.body.complaintNote,
    });

    const savedComplaint = await newComplaint.save();

    res.status(201).json(savedComplaint);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const response = await ComplaintSchema.find();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a specific complaint by ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await ComplaintSchema.findById(id);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "Complaint not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a complaint by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await ComplaintSchema.findByIdAndDelete(id);

    if (response) {
      res.json({ message: "Complaint deleted successfully" });
    } else {
      res.json({ message: 'Complaint not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
