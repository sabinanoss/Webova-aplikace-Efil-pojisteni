const Policyholder = require('./../models/policyholderModel');

const catchAsync = require('./../utils/catchAsync');

exports.preCreatePolicyholder = (req, res) => {
  res.status(200).render('newpolicyholder', {
    title: 'Vytvoření nového pojištěnce',
  });
};

exports.getAllPolicyholders = catchAsync(async (req, res, next) => {
  const policyholders = await Policyholder.find();
  res.status(200).render('allpolicyholders', {
    title: 'Správa pojištěnců',
    policyholders,
  });
});

exports.getPolicyholder = catchAsync(async (req, res, next) => {
  const policyholder = await Policyholder.findById(req.params.id).populate(
    'holderinsurance'
  );
  console.log(policyholder);
  if (!policyholder) {
    return console.log('Žádný pojištěnec s tímto ID nebyl nalezen'); //! Přidat error = AppError
  }

  res.status(200).render('detailpolicyholder', {
    title: 'Pojištěnec',
    policyholder,
  });
});

exports.createPolicyholder = catchAsync(async (req, res, next) => {
  const body = {
    firstName: req.body.userFirstName,
    lastName: req.body.userLastName,
    email: req.body.userEmail,
    phoneNumber: req.body.userPhone,
    adress: req.body.userAdress,
    city: req.body.userCity,
    postCode: req.body.userPostCode,
    insurances: req.body.userInsurances,
    parentInsurance: req.body.userParentInsurance,
  };
  const newPolicyholder = await Policyholder.create(body);
  res.status(201).redirect('/sprava-pojistencu');
});

exports.updatePolicyholder = catchAsync(async (req, res, next) => {
  const policyholder = await Policyholder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  console.log(res);
  res.status(201).redirect('/sprava-pojistencu');
});

exports.deletePolicyholder = catchAsync(async (req, res, next) => {
  const policyholder = await Policyholder.findByIdAndDelete(req.params.id);

  if (!policyholder) {
    return console.log('Žádný pojištěnec s tímto ID nebyl nalezen'); //! Přidat error = AppError
  }
  res.status(204).redirect('/sprava-pojistencu');
});

exports.editPolicyholder = catchAsync(async (req, res, next) => {
  const policyholder = await Policyholder.findById(req.params.id);

  if (!policyholder) {
    return console.log('Žádný pojištěnec s tímto ID nebyl nalezen'); //! Přidat error = AppError
  }

  res.status(200).render('editpolicyholder', {
    title: 'Úprava pojištěnce',
    policyholder,
  });
});
