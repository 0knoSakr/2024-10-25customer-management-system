// 顧客情報のルーティング

// expressをインポートしてルーター機能を使用可能にする
const express = require('express');
// 顧客関連のコントローラーをインポートする
const customerController = require('../controllers/customerController');
// expressのルーターオブジェクトを作成するここでルーターが使えるようになる
const router = express.Router();

// ルート設定
router.get('/customers', customerController.allCustomer);
router.get('/customers/:id', customerController.getCustomer);
router.post('/customers', customerController.postCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
