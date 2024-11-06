//顧客追加/編集画面
import React from 'react';
const CustomerFrom = () => {
  return (
    <form>
      <div>
        <label htmlFor="">顧客名:</label>
        <input type="text" placeholder="顧客名を入力"/>
      </div>
      <div>
        <label htmlFor="">メールアドレス:</label>
        <input type="text" placeholder="メールアドレスを入力"/>
      </div>
      <div>
        <label htmlFor="">電話番号:</label>
        <input type="text" placeholder="電話番号を入力"/>
      </div>
      <div>
        <label htmlFor="">住所:</label>
        <input type="text" placeholder="住所を入力"/>
      </div>
      <div>
        <label htmlFor="">会社名:</label>
        <input type="text" placeholder="会社名を入力"/>
      </div>
      <button type="submit">保存</button>
    </form>
  );
};

export default CustomerFrom;
