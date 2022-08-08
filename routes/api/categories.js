const express = require("express");
const Joi = require("joi");
require("dotenv").config();

const { authorize } = require("../../middlewares");
const { createError } = require("../../helpers");

const router = express.Router();

const Category = require("../../models/category");

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

router.post("/", authorize, async (req, res, next) => {
  try {
    const { error } = categorySchema.validate(req.body);

    if (error) {
      throw createError(400, error.message);
    }
    const result = await Category.create(req.body);

    res.status(201).json({
      ...result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
