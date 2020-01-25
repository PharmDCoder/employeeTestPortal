const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testRecordSchema = new Schema({
  testID: { type: String, required: true },
  testScore: { type: Number, required: true },
  testPass: { type: Boolean, required: true },
  testStart: { type: Date, required: false},
  testFinish: { type: Date, required: false },
  testSignature: { type: String, required: false },
  testQuestionList: [
    {
      testQuestionIndex: Number,
      testQuestionCorrect: Boolean
    }
  ]
});

const TestRecord = mongoose.model("TestRecord", testRecordSchema);

module.exports = TestRecord;