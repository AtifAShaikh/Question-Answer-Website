const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


router.post('/create', (req, res) => {
    console.log('api/users/create route hit');
    res.json({message: "success"});
});

module.exports = router;