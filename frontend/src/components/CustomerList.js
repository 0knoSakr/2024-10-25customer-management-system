import React from "react";
import { Link } from "react-router-dom";

const CustomerList = ({ customers }) => {
  return (
    <div>
      <div>
        <Link to={`/customer/form`}>
          <button>顧客情報追加</button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>顧客名</th>
              <th>メールアドレス</th>
              <th>電話番号</th>
              <th>会社名</th>
              <th>詳細</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.company_name}</td>
                  <td>
                    <Link to={`/customer/${customer.id}`}>
                      <button>詳細</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">顧客情報が見つかりません。</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
