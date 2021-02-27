const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRESQL_URI, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
