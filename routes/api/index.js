const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
router.use('/users', userRoutes);


module.exports = router;

// router.post('/', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });




// router.post('/user', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/user', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });

// router.post('/create', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/create', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });

// router.post('/login', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/login', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });
// router.post('/update', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/update', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });
// router.post('/get', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/get', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });

// router.post('/question', async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/question', async (req,res) => {
    
//   try {
//     const eventData = await Event.findAll();
//     const events = eventData.map((event) =>
//     event.get({ plain: true })
//     );

//     res.status(200).json(events); 
// if (!eventData){
//   res.status(404).json({message:'no event found'})
// }

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     };
// });