const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.post('/create', (req, res) => {
    console.log('api/users/create route hit');
    res.json({message: "success"});
});

module.exports = router;