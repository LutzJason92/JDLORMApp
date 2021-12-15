const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Dep = require("./Dep");

class Role extends Model {}

Role.init(
  {
    // table columns
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Dep,

        // This is the column name of the referenced model
        key: "dep_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Roles",
  }
);

module.exports = Role;
