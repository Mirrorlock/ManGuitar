const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("your_cart");
})

module.exports = router;