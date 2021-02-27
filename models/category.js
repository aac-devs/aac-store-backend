const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "category",
    timestamps: false,
  }
);

module.exports = Category;
