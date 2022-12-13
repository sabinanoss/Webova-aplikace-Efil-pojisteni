const ContractedInsurance = require('../models/contractedinsuranceModel');
const catchAsync = require('./../utils/catchAsync');

exports.preCreateContractedInsurance = (req, res) => {
  res.status(200).render('', {
    title: 'Sjednat nové pojištění',
  });
};

exports.createContractedInsurance = catchAsync(async (req, res, next) => {
  const body = {
    amount: req.body.insuranceAmount,
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo,
    policyholder: req.body.policyholder,
    insurances: req.body.insurance,
  };
  const newContractedInsurance = await ContractedInsurance.create(body);
});

exports.updateInsurance = catchAsync(async (req, res, next) => {
  const insurance = await Insurance.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!insurance) {
    return console.log('Žádné pojištění s tímto ID nebylo nalezeno'); //! Přidat error = AppError
  }

  res.status(201).redirect('/sprava-pojisteni');
});

exports.deleteInsurance = catchAsync(async (req, res, next) => {
  const insurance = await Insurance.findByIdAndDelete(req.params.id);

  if (!insurance) {
    return console.log('Žádné pojištění s tímto ID nebylo nalezeno'); //! Přidat error = AppError
  }
  res.status(200).json({
    status: 'success',
  });
});

exports.editInsurance = catchAsync(async (req, res, next) => {
  const insurance = await Insurance.findById(req.params.id);

  if (!insurance) {
    return console.log('Žádný pojištěnec s tímto ID nebyl nalezen'); //! Přidat error = AppError
  }

  res.status(200).render('editinsurance', {
    title: 'Úprava pojištění',
    insurance,
  });
});
