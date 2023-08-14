
const { Router} = require('express');
const router = Router();
const multer = require('multer');


const upload = require('../config/file');
const storage = require('../config/file');


const upload = multer({storage: storage});
const alluploads = upload.fields([{name: 'photo', maxCount: 5}]);

router.post("/User", alluploads, validationUser("create"), userController.create);