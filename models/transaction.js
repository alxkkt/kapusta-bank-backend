const { Schema, model } = require("mongoose");

const transactionSchema = Schema(
  {
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "transport",
        "products",
        "health",
        "alcohol",
        "entertainment",
        "housing",
        "technique",
        "communal, communications",
        "sports, hobbies",
        "education",
        "other",
        "wages",
        "income",
      ],
    },
    sum: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["income", "expense"],
    },
    date: {
      type: Date,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Transaction = model("transaction", transactionSchema);

module.exports = Transaction;
