const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index.ejs');
});

router.get('/keep-score', async (req, res) => {
    res.render('keep-score.ejs');
});

module.exports = router;