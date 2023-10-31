const express = require('express');
const EmailModel = require('../models/Emaildata');

const router = express.Router();

// Start the agenda instance

router.post('/schedule-email', async (req, res) => {
  try {
    let data=new EmailModel(req.body)
    let dd=await data.save()
    res.json(dd)

  } catch (error) {
    console.log("error" + error);
    res.status(500).json({ error: 'Failed to schedule email' });
  }
});

module.exports = router;
