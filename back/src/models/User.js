const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User", {
 
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
});

// Associations
User.associate = function (models) {
 
  User.hasMany(models.Photo);
 
  
};

module.exports = User;

