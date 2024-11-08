//顧客詳細画面
import React from "react";
import { Link } from "react-router-dom";

const CustomerDetail = ({ customer }) => {
  return (
    <div>
      <h2>顧客詳細</h2>
      <p>名前:{customer[0].name}</p>
      <p>email:{customer[0].email}</p>
      <p>電話番号:{customer[0].phone}</p>
      <p>住所:{customer[0].address}</p>
      <p>会社名:{customer[0].company_name}</p>
      <Link to={`/customer/form/${customer.id}`}>
        <button>編集</button>
      </Link>
    </div>
  );
};

export default CustomerDetail;
