const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const User  = require('../../models/user');

// Matches with "/api/posts"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);
// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
module.exports = router;



// router.post('/create', (req, res) => {
//     console.log('api/users/create route hit');
//     res.json({message: "success"});
// });

// router.post('/login', (req, res) => {
//     console.log('api/users/login route hit');
//     res.json({message: "successful login"});
// });

// router.put('/update', (req, res) => {
//     console.log('api/users/update route hit');
//     res.json({message: "successful update"});
// });

// router.get('/find', (req, res) => {
//     console.log('api/users/find route hit');
//     res.json({message: "successful find"});
// });


// module.exports = router;