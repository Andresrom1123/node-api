const { Router } = require('express');
const router = new Router();


const brands = require('../sample.json')

router.get('/api/brands', (req, res) => {
	res.json(brands);
});

module.exports = router;
