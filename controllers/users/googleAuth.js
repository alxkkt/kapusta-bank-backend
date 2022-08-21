const { OAuth2Client } = require("google-auth-library");
const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

const { createError } = require("../../helpers");
const { GOOGLE_CLIENT_ID, SECRET_KEY } = process.env;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const googleAuth = async (req, res, next) => {
  const { tokenId } = req.body;

  const result = await client.verifyIdToken({
    idToken: tokenId,
    requiredAudience: GOOGLE_CLIENT_ID,
  });

  if (!result.payload) {
    throw createError(401, "invalid password or email");
  }

  const { email, email_verified, exp } = result.payload;
  if (!email_verified) {
    throw createError(401, "Email not verified");
  }

  const user = await User.findOne({ email });
  
  if (!user) {
    const password = `${nanoid()}.${SECRET_KEY}`;

    const newUser = await User.create({
      email,
      password,
      verify: true,
      verificationToken: nanoid(),
    });
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: exp });
    const user = await User.findByIdAndUpdate(newUser._id, {
      token,
      verificationToken: "",
    });
    res.status(201).json({
      token,
      email: user.email,
      totalBalance: user.totalBalance,
    });
    return;
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: exp });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(201).json({
    token,
    email: user.email,
    totalBalance: user.totalBalance,
  });
};

module.exports = googleAuth;
