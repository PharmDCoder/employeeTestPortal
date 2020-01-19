const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testRecordSchema = new Schema({
  testID: { type: String, required: true },
  testScore: { type: Number, required: true },
  testPass: { type: Boolean, required: true },
  testDate: { type: Date, required: false }
  
});

const TestRecord = mongoose.model("TestRecord", testRecordSchema);

module.exports = TestRecord;