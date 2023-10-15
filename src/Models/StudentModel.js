const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    mobile: { type: String },
    password: { type: String },
    address: { type: String },
    roll: { type: String },
    class: { type: String },
  },
  { timestamps: true, versionKey: false }
);
const StudentModel = mongoose.model("students", DataSchema);
module.exports = StudentModel;
