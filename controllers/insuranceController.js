const Insurance = require('./../models/insuranceModel');

const catchAsync = require('./../utils/catchAsync');

exports.preCreateInsurance = (req, res) => {
  res.status(200).render('newinsurance', {
    title: 'Vytvoření nové pojištění',
  });
};

exports.getAllInsurances = catchAsync(async (req, res, next) => {
  const insurances = await Insurance.find();
  res.status(200).render('allinsurances', {
    title: 'Správa pojištění',
    insurances,
  });
});

exports.getInsurance = catchAsync(async (req, res, next) => {
  const insurance = await Insurance.findById(req.params.id);

  if (!insurance) {
    return console.log('Žádné pojištění s tímto ID nebylo nalezeno'); //! Přidat error = AppError
  }

  res.status(200).render('detailinsurance', {
    title: 'Pojištění',
    insurance,
  });
});

exports.createInsurance = catchAsync(async (req, res, next) => {
  const body = {
    insuranceName: req.body.insuranceName,
    insuranceType: req.body.insuranceType,
  };
  const newInsurance = await Insurance.create(body);
  res.status(201).redirect('/sprava-pojisteni');
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
