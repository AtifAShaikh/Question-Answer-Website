const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.post('/create', (req, res) => {
    console.log('api/questions/create route hit');
    res.json({message: "success"});
});

router.post('/upvote', (req, res) => {
    console.log('api/questions/upvote route hit');
    res.json({message: "success"});
});

router.post('/downvote', (req, res) => {
    console.log('api/questions/downvote route hit');
    res.json({message: "success"});
});

router.post('/follow', (req, res) => {
    console.log('api/questions/follow route hit');
    res.json({message: "success"});
});

router.post('/find', (req, res) => {
    console.log('api/questions/find route hit');
    res.json({message: "success"});
});


module.exports = router;