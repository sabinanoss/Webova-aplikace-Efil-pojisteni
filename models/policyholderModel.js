const mongoose = require('mongoose');
const { pathToFileURL } = require('ndb/lib/filepath_to_url');

const policyholderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Pojištěnec musí mít jméno'],
      trim: true,
      minLength: [3, 'Jméno musí mít nejméně tři písmena'],
      maxLength: [20, 'Jméno nemůže mít více než dvacet písmen'],
    },
    lastName: {
      type: String,
      required: [true, 'Pojištěnec musí mít příjmení'],
      trim: true,
      minLength: [3, 'Příjmení musí mít nejméně tři písmena'],
      maxLength: [20, 'Příjmení nemůže mít více než dvacet písmen'],
    },
    email: {
      type: String,
      required: [true, 'Pojištěnec musí mít email'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Pojištěnec musí mít telefonní číslo'],
      trim: true,
    },
    adress: {
      type: String,
      required: [true, 'Pojištěnec musí mít adresu'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'Pojištěnec musí mít město'],
      trim: true,
    },
    postCode: {
      type: String,
      required: [true, 'Pojištěnec musí mít PSČ'],
      trim: true,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    insurances: {
      type: mongoose.Schema.ObjectId,
      ref: 'Insurance',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Policyholder = mongoose.model('Policyholder', policyholderSchema);

module.exports = Policyholder;
