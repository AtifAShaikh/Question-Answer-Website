const router = require("express").Router();
const answersController = require("../../controllers/answersController");
// const answers = require('../../models/answers');


// Matches with "/api/posts"
router
  .route("/")
  .get(answersController.findAll)
  .post(answersController.create);
// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(answersController.findById)
  .put(answersController.update)
  .delete(answersController.remove);

router.put('/upvote/upvoters', answersController.upvote);
router.put('/downvote/downvoters', answersController.downvote);
router.put('/get/num', answersController.getnumanswers);
module.exports = router;

// router.post('/create', (req, res) => {
    
//     answers.create(req.body)
//         .then(result =>
//             res.status(200).json(result))
//         .catch(err =>
//             res.status(400).json(err))
    
    
    
//     console.log('api/answers/create route hit');
   
// });

// router.post('/favorite', (req, res) => {
//     console.log('api/answers/favorite route hit');
//     res.json({message: "successful favorite"});
// });

// router.post('/upvote', (req, res) => {
//     console.log('api/answers/upvote route hit');
//     res.json({message: "success"});
// });

// router.post('/downvote', (req, res) => {
//     console.log('api/answers/downvote route hit');
//     res.json({message: "successful downvote"});
// });

// router.post('/follow', (req, res) => {
//     console.log('api/answers/follow route hit');
//     res.json({message: "successful follow"});
// });

// router.get('/find', (req, res) => {
//     console.log('api/answers/find route hit');
//     res.json({message: "successful find"});
// });


// module.exports = router;