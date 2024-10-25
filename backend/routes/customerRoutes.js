//顧客情報のルーティング

//expressをインポートしてルーター機能を使用可能にする
const express = require('express');
//ユーザー関連のコントローラーをインポートする
const userController = require('../controllers/customerController');
//expressのルーターオブジェクトを作成するここでルーターが使えるようになる
const router = express.Router;

router.get('/customers', customerContoroller.allCustomer);
