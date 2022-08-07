const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { nanoid } = require("nanoid");

require("dotenv").config();
const { SECRET_KEY } = process.env;

const User = require("../../models/user");

const { createError, sendMail } = require("../../helpers");
const { authorize } = require("../../middlewares");

const router = express.Router();

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

// register
router.post("/signup", async (req, res, next) => {
  try {
    const { error } = userRegisterSchema.validate(req.body);

    if (error) {
      throw createError(400, error.message);
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw createError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = nanoid();
    const result = await User.create({
      email,
      password: hashPassword,
      verificationToken,
    });

    const mail = {
      to: email,
      subject: "Confirm your email address",
      html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Click here to confirm your mail</a>`,
    };
    await sendMail(mail);

    res.status(201).json({
      email: result.email,
    });
  } catch (error) {
    next(error);
  }
});

// confirm user email
router.get("/verify/:verificationToken", async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
      throw createError(404);
    }

    await User.findByIdAndUpdate(user._id, {
      verificationToken: null,
      verify: true,
    });
    res.json({
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
});

// mail double check
router.post("/verify", async (req, res, next) => {
  try {
    const { error } = verifyEmailSchema.validate(req.body);
    if (error) {
      throw createError(400);
    }

    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw createError(404);
    }
    if (user.verify) {
      throw createError(400, "Verification has already been passed");
    }

    const mail = {
      to: email,
      subject: "Confirm your email address",
      html: `<a target="_blank" href="http://localhost:3000/api/users/${user.verificationToken}">Click here to confirm your mail</a>`,
    };
    await sendMail(mail);
  } catch (error) {
    next(error);
  }
});

// signin
router.post("/login", async (req, res, next) => {
  try {
    const { error } = userLoginSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user.verify) {
      throw createError(401, "Email not verified");
    }

    // if (!user) {
    //   throw createError(401, "Email wrong");
    // }

    // const isValidPassword = await bcrypt.compare(password, user.password);
    // if (!isValidPassword) {
    //   throw createError(401, "Password wrong");
    // }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!user || !isValidPassword) {
      throw createError(401, "Email or password is wrong");
    }

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
      token,
      user: {
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
});

// logout
router.get("/logout", authorize, async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) {
      throw createError(401, "Not authorized");
    }
    await User.findByIdAndUpdate(_id, { token: "" });

    res.status(204);
  } catch (error) {
    next(error);
  }
});

// get current user
router.get("/current", authorize, async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) {
      throw createError(401, "Not authorized");
    }

    res.json({
      email: user.email,
      token: user.token,
      totalBalance: user.totalBalance,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
