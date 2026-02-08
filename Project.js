const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
 title: String,
 description: String,

 status: {
  type: String,
  enum:["active","completed"],
  default:"active"
 },

 assignedTo: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }],

 createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 },
 assignedTo:[
 {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }
]

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);