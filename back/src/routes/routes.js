
const { Router} = require('express');
const router = Router();
const multer = require('multer');

const userController = require('../controllers/userController');
const storage = require('../config/file');


const upload = multer({storage: storage});
const alluploads = upload.fields([{name: 'photo', maxCount: 5}]);

router.post("/User", alluploads,  userController.create);
router.put("User/file/:id", userController.removerPhoto);

module.exports = router;