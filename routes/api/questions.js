const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");



// const Questions = require('../../models/questions');


// Matches with "/api/posts"
router
  .route("/")
  .get(questionsController.findAll)
  .post(questionsController.create);
// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(questionsController.findById)
  .put(questionsController.update)
  .delete(questionsController.remove);
module.exports = router;


// router.post('/create', (req, res) => {
//     Questions.create(req.body)
//         .then(result =>
//             res.status(200).json(result))
//         .catch(err =>
//             res.status(400).json(err))

//     console.log('api/questions/create route hit');
    
// });


// router.post('/upvote', (req, res) => {
//     console.log('api/questions/upvote route hit');
//     res.json({ message: "successfull upvote" });
// });

// router.post('/downvote', (req, res) => {
//     console.log('api/questions/downvote route hit');
//     res.json({ message: "successful downvote" });
// });

// router.post('/follow', (req, res) => {
//     console.log('api/questions/follow route hit');
//     res.json({ message: "successesful follow" });
// });

// router.get('/find', (req, res) => {
//     console.log('api/questions/find route hit');
//     res.json({ message: "successeful find" });
// });


// module.exports = router;