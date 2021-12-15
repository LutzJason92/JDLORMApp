const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dep extends Model {}

Dep.init(
  {
    // table columns
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dep_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Departments",
  }
);

module.exports = Dep;
