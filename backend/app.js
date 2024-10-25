//Expressアプリケーションのエントリーポイント

//expressフレームワークをインポートしサーバーを構築するための機能を使用可能にする
const express = require('express');
//corsモジュールをインポートして他のオリジンからのリクエストを許可する機能を使用可能にする
const cors = require('cors');
//expressアプリケーションを作成
const app = express();
//サーバーが起動するポートを設定
const PORT = process.env.PORT || 3000;
//corsを使用し他のオリジンからリクエストを許可する
app.use(cors());
//ルートに/のgetリクエストが来たらメッセージを返す
app.get('/', (req, res) => {
  res.semd("Server is running!");
});
//サーバーを指定されたポートで起動しメッセージを返す
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
