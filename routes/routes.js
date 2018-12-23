const express = require('express');
const router = express.Router();
const applyFilters = require('../utils/applyFilters');
const path = require('path');

const matches = require('../database/matches.json');

router.get('/api/matches', (req, res) => {
    res.send(matches);
});

router.post('/api/matches/filters', (req, res) => {
    res.send(applyFilters(matches, req.body));
});


router.get('*', (req, res) => {
    res.sendFile(path.resolve('client/build/index.html'));
});


module.exports = router;
