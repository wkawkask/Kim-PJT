const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`reuqest ${req.ip} http://localhost:3001/`);
    res.send();
});

module.exports = router;