const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/');
    res.send();
});

module.exports = router;