const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    name: {
      type: String,
      requred: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Category = model("category", categorySchema);

module.exports = Category;
