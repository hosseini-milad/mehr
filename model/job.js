<<<<<<< HEAD
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, default: null },
  enTitle: { type: String, default: null },
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'job'},
});

=======
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, default: null },
  enTitle: { type: String, default: null },
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'job'},
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("job", jobSchema);