import React from "react";
import { Link } from "react-router-dom";

const CustomerDetail = ({ customer }) => {
  return (
    <div>
      <h2>顧客詳細</h2>
      <p>名前: {customer.name}</p>
      <p>email: {customer.email}</p>
      <p>電話番号: {customer.phone}</p>
      <p>住所: {customer.address}</p>
      <p>会社名: {customer.company_name}</p>
      <Link to={`/customer/form/${customer.id}`}>
        <button>編集</button>
      </Link>
    </div>
  );
};

export default CustomerDetail;
