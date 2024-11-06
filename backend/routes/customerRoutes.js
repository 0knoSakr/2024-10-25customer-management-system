const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router.get('/customers', customerController.allCustomer);//全部の情報を取得
router.get('/customers/:id', customerController.getCustomer);//idから情報を取得
router.post('/customers', customerController.postCustomer);//新規情報を追加
router.put('/customers/:id', customerController.updateCustomer);//idから情報を編集
router.delete('/customers/:id', customerController.deleteCustomer);//情報を削除

module.exports = router;
