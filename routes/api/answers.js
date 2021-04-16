const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const answers = require('../../models/answers');


router.post('/create', (req, res) => {
    
    answers.create(req.body)
        .then(result =>
            res.status(200).json(result))
        .catch(err =>
            res.status(400).json(err))
    
    
    
    console.log('api/answers/create route hit');
   
});

router.post('/favorite', (req, res) => {
    console.log('api/answers/favorite route hit');
    res.json({message: "successful favorite"});
});

router.post('/upvote', (req, res) => {
    console.log('api/answers/upvote route hit');
    res.json({message: "success"});
});

router.post('/downvote', (req, res) => {
    console.log('api/answers/downvote route hit');
    res.json({message: "successful downvote"});
});

router.post('/follow', (req, res) => {
    console.log('api/answers/follow route hit');
    res.json({message: "successful follow"});
});

router.get('/find', (req, res) => {
    console.log('api/answers/find route hit');
    res.json({message: "successful find"});
});


module.exports = router;