const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
{
  name: {
  type: String,
  trim: true,
  required: "Enter a name for this transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    defalt: Date.now
    }
  }
);
const Transation = mongoose.model("Transaction", transactionSchema);


module.exports = Transaction;