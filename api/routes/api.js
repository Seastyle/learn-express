const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: 'get', value: 'get' });
});

router.post('/new', (req, res) => {
    res.status(201).json({ msg: '感觉还不错~~~' });
});
  
module.exports = router;
