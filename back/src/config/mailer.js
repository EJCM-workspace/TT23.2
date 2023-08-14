const nodemailer = require('nodemailer');
require('../config/dotenv')();
const fs = require('fs');

const sender = process.env.MAIL_SENDER;
const pass = process.env.MAIL_PASSWORD; 



const transport = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: sender,
    pass: pass
  }
  
});

const readRenderHtml = (path, cb) => {
  fs.readFile(path, 'utf-8', (err, data) =>{
    if(err){ 
      
      cb(err);
    
    }else{
    
        cb(null, data);
    }
  })
}


module.exports = {
  transport,
  readRenderHtml
}
