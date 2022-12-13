const express = require('express');
const insuranceController = require('./../controllers/insuranceController');

const router = express.Router();

router.route('/nove-pojisteni').get(insuranceController.preCreateInsurance);

router
  .route('/')
  .get(insuranceController.getAllInsurances)
  .post(insuranceController.createInsurance);

router
  .route('/:id')
  .get(insuranceController.getInsurance)
  .patch(insuranceController.updateInsurance)
  .delete(insuranceController.deleteInsurance);

router.route('/edit/:id').get(insuranceController.editInsurance);

module.exports = router;
