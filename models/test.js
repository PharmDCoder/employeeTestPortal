const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testName: { type: String, required: true },
  testCategory: { type: String, required: true },
  testRequired: Boolean,
  testCreatedBy: { type: String, required: false },
  testCreatedDate: { type: Date, required: false },
  testQuestions: [
    {
    questionText: String,
    questionAnswer: String,
    questionOptionsGood: [String],
    questionOptionsBad: [String]
  }]
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;