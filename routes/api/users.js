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

router.post('/login', (req, res) => {
    console.log('api/users/login route hit');
    res.json({message: "successful login"});
});

router.put('/update', (req, res) => {
    console.log('api/users/update route hit');
    res.json({message: "successful update"});
});

router.get('/find', (req, res) => {
    console.log('api/users/find route hit');
    res.json({message: "successful find"});
});


module.exports = router;