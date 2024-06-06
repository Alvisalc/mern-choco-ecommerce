const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<p>Check server running</p>');
});

module.exports = router;
