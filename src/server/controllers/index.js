const path = require('path');

const router = require('express').Router();

// Add server routes here

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../dist/', 'index.html'));
});

module.exports = router;
