const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router.get('/customers', customerController.allCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.post('/customers', customerController.postCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
