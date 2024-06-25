const router = require('express').Router();
const Request = require('../models/Request');

// Create a new request
router.post('/request', (req, res) => {
  const newRequest = new Request({
    user: req.user.id,
    message: req.body.message,
    status: 'pending'
  });
  newRequest.save().then(request => res.json(request));
});

// Get all requests for a user
router.get('/requests', (req, res) => {
  Request.find({ user: req.user.id }).then(requests => res.json(requests));
});

module.exports = router;
