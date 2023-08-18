const multer = require('multer')
const path = require("path");


const storage = multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});


const fileFilter = function (req, file, cb) {
    if (file.mimetype.includes('image')) {
      cb(null, true);
    } else {
      cb(new Error('File must be an image!'), false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  

module.exports ={ 
  storage,
  upload,
  
};
