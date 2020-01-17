const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testRecordSchema = new Schema({
  testScore: { type: Number, required: true },
  testPass: { type: Boolean, required: true },
  testDate: { type: Date, required: false },
  test: {
    type: Schema.Types.ObjectId,
    ref: "Test"
  }
});

const TestRecord = mongoose.model("TestRecord", testRecordSchema);

module.exports = TestRecord;