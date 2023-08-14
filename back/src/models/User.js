const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User", {
  moderator: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  point: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  salt:{
    type: DataTypes.STRING,
  
  },
  hash:{
    type: DataTypes.STRING,
  
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Associations
User.associate = function (models) {
 
  User.hasMany(models.Photo);
 
  
};

module.exports = User;

