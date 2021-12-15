const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Tag = require("./Tag");
const Product = require("./Product");

class ProductTag extends Model {}

ProductTag.init(
  {
    // table columns
    proTag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Tag,

        // This is the column name of the referenced model
        key: "tag_id",
      },
    },
    pro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Product,
        // This is the column name of the referenced model
        key: "pro_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
