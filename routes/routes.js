// Modules
let express = require("express");
let router = express.Router();

// Controllers
let UserController = require("../controllers/UserController");
let ProductController = require("../controllers/ProductController");

// Routes

// GET's
router.get('/users/:page', UserController.all);
router.get('/products/:page', ProductController.all);

// POST's
router.post('/user', UserController.create);
router.post('/signin', UserController.signin);
router.post('/product', ProductController.create);
router.post('/userId', UserController.getById);

// PATCH's
router.patch('/user', UserController.edit);
router.patch('/product', ProductController.edit);

module.exports = router;