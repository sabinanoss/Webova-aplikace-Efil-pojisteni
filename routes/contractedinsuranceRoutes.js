const express = require('express');
const contractedinsuranceController = require('./../controllers/contractedinsuranceController');

const router = express.Router();

router
  .route('/sjednat-pojisteni')
  .get(contractedinsuranceController.preCreateContractedInsurance);

router
  .route('/')
  .get(contractedinsuranceController.getAllContractedInsurance)
  .post(contractedinsuranceController.createContractedInsurance);

router
  .route('/:id')
  .get(contractedinsuranceController.getContractedInsurance)
  .patch(contractedinsuranceController.updateContractedInsurance)
  .delete(contractedinsuranceController.deleteContractedInsurance);

router
  .route('/edit/:id')
  .get(contractedinsuranceController.editContractedInsurance);

module.exports = router;
