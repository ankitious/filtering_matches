const express = require('express');
const router = express.Router();
const applyFilters = require('../utils/applyFilters');

const matches = require('../database/matches.json');

router.get('/api/matches', (req, res) => {
    res.send(matches);
});

router.post('/api/matches/filters', (req, res) => {
    console.log(req.body)
    res.send(applyFilters(matches, req.body));
});


module.exports = router;
