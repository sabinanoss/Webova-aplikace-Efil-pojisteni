const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema(
  {
    insuranceName: {
      type: String,
      required: [true, 'Pojištění musí mít název'],
    },
    insuranceType: {
      type: String,
      required: [true, 'Pojištění musí mít typ'],
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
