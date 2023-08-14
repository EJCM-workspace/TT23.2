
const User = require("../models/User");
const fsPromises = require('fs')

const { transport, readRenderHtml } = require('../config/mailer');
const path = require('path');
const hbs = require('handlebars');

const { where } = require("sequelize");

const file = require('../config/file');

const index = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Cart,
          attributes: ["amount", "point", "price", "payment"],
        },
        { model: Evaluate },
      ],
    });
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const create = async (req, res) => {
  try {
    validationResult(req).throw();
    const { password } = req.body;
    const hashSalt = Auth.generatePassword(password);
    const hash = hashSalt.hash;
    const salt = hashSalt.salt;
    let image = null;
    if (req.file){
      image = req.file.filename
    }
    
    const newUser = {
      moderator: req.body.moderator,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      cpf: req.body.cpf,
      image: req.body.image,
      address: req.body.address,
      salt: salt,
      hash: hash,
    };
    const user = await User.create(newUser);
  //--
    const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
    readRenderHtml(path.join(pathTemplate, "mail.html"), (err, html)=>{
      const template = hbs.compile(html);
      
      const replacements = {
        title: 'Bem vindo',
        greeting: 'Seja Bem Vindo',
        name: user.dataValues.name,
        message: 'Já teve pensada nisso'

      };
      
      const htmlToSend = template(replacements)
      
      const message = {
        from: process.env.MAIL_SENDER,
        to: user.dataValues.email, 
        subject: "Bem vindo",
        html: htmlToSend,
        attachements:[{
          filename: 'Logo.png',
          path: __dirname + '/../../templates/Logo.svg',
          cid: 'logo'
        }]
      }
      
      transport.sendMail(message, (err) =>{
        console.log(err)
      });
    });
    //---
    return res.status(201).json({ message: "User created", user });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    validationResult(req).throw();
    const [updated] = await User.update(req.body, { where: { id: id } });
    if (updated) {
      const user = await User.findByPk(id);
      return res.status(200).send(user);
    }
    throw new Error();
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id: id } });
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};



module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  
};
