//Expressアプリケーションのエントリーポイント

// `dotenv` パッケージを使用して `.env` ファイル内の環境変数を読み込み、`process.env` オブジェクトに追加する
require('dotenv').config();
//expressフレームワークをインポートしサーバーを構築するための機能を使用可能にする
const express = require('express');
//corsモジュールをインポートして他のオリジンからのリクエストを許可する機能を使用可能にする
const cors = require('cors');
//expressアプリケーションを作成
const app = express();
//ルーティングをインポート
const customerRoutes = require('./routes/customerRoutes');
//サーバーが起動するポートを設定
const PORT = process.env.PORT || 3000;
//corsを使用し他のオリジンからリクエストを許可する
app.use(cors());
//クライアントから送られてくるデータをjsonにする
app.use(express.json());

//ルートに/のgetリクエストが来たらメッセージを返す
app.get('/', (req, res) => {
  res.send("Server is running!");
});

app.get('/customers', (req, res) => {
  res.send("customerPage!");
});
//サーバーを指定されたポートで起動しメッセージを返す
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
