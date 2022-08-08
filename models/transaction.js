const { Schema, model } = require("mongoose");

const transactionSchema = Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "Transport",
        "Health",
        "Alcohol",
        "Entertainment",
        "Housing",
        "Technique",
        "Communal, Communications",
        "Sports, Hobbies",
        "Education",
        "Other",
      ],
    },
    sum: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Income", "Expense"],
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
