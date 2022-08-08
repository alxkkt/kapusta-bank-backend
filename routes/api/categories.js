const express = require("express");
const Joi = require("joi");
require("dotenv").config();

const { authorize } = require("../../middlewares");
const { createError } = require("../../helpers");

const router = express.Router();

const Category = require("../../models/category");
const { User } = require("../../models/user");

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

router.post("/", authorize, async (req, res, next) => {
  try {
    const { error } = categorySchema.validate(req.body);
    const { name } = req.body;

    if (error) {
      throw createError(400, error.message);
    }
    await Category.create(req.body);

    res.status(201).json({
      name,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", authorize, async (req, res, next) => {
  try {
    const { _id } = req.user;

    const result = await User.findById(_id);

    if (!result) {
      throw createError(404, "User not found");
    }

    const elements = await Category.find({});

    res.json(elements);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
