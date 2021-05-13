const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;
