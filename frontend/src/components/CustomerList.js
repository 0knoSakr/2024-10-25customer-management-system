//顧客一覧画面
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const CustomerList = () => {
  const [allCustomer, setAllCustomer] = useState([]);
  const [Customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get("/customers");
        setCustomers(response.data);
        setAllCustomer(response.data);
      } catch (error) {
        console.error("顧客情報の取得に失敗しました:", error);
      }
    };
    fetchCustomers();
    console.log("test");
  }, []);

  return (
    <div>
      <h2>顧客詳細</h2>
      <div>
        <input type="text" />
        <button>フィルタリング</button>
        <Link to={`/customers`}>
          <button>顧客情報追加</button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>顧客名</th>
              <th>メルアド</th>
              <th>電話番号</th>
              <th>会社名</th>
              <th>詳細</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.company_name}</td>
                <td>
                  <Link to={`/customers/${customer.id}`}>
                    <button>詳細</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerList;
