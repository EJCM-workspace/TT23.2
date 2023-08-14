const { Router } = require("express");
const router = Router();

const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");

router.post("/User", UserController.create);
router.get("/User/:id", UserController.show); 
router.get("/User", UserController.index); 
router.put("/User/:id", UserController.update);
router.delete("/User/:id", UserController.destroy);

router.post("/Post", PostController.create);
router.get("/Post/:id", PostController.show); 
router.get("/Post", PostController.index); 
router.put("/Post/:id", PostController.update);
router.delete("/Post/:id", PostController.destroy);

router.post("/Login", AuthController.login);
router.get("/getDetails", AuthController.getDetails);

router.post("/userPost/:userId/:postId", PostController.addRelationshipUser);

module.exports = router;