const mongoose = require('mongoose');

const policyholderInsuranceSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
  policyholder: {
    type: mongoose.Schema.ObjectId,
    ref: 'Policyholder',
  },
  insurances: {
    type: mongoose.Schema.ObjectId,
    ref: 'Insurance',
  },
});

const ContractedInsurance = mongoose.model(
  'PolicyholderInsurance',
  policyholderInsuranceSchema
);

module.exports = ContractedInsurance;
