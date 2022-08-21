const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [emailRegexp, "Email is invalid"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    totalBalance: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const sigUpInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const verificationEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const balanceSchema = Joi.object({
  totalBalance: Joi.number().required(),
});

const schemas = {
  register: sigUpInSchema,
  logIn: sigUpInSchema,
  verification: verificationEmailSchema,
  balance: balanceSchema,
};

module.exports = { User, schemas };
