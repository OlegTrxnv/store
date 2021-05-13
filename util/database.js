const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("store", "root", "Oleg_123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
// sequelize package requires mysql2 package installed
