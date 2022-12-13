const express = require('express');
const policyholderController = require('./../controllers/policyholderController');

const router = express.Router();

router
  .route('/novy-pojistenec')
  .get(policyholderController.preCreatePolicyholder);

router
  .route('/')
  .get(policyholderController.getAllPolicyholders)
  .post(policyholderController.createPolicyholder);

router
  .route('/:id')
  .get(policyholderController.getPolicyholder)
  .patch(policyholderController.updatePolicyholder)
  .delete(policyholderController.deletePolicyholder);

router.route('/edit/:id').get(policyholderController.editPolicyholder);

module.exports = router;
