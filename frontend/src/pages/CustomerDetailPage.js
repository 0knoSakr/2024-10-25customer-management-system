//顧客詳細画面
import React { useState, useEffect } from 'react';
import api from '../services/api';//データを取得するためのapi
import { useParams } from 'react-router-dom';//idから情報をとれるようになる

const CustomerDetailPage = () => {
  const [customer, setCustomer] = useState(null);
  const { id } = useState();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`http://localsot:5000/api/customers/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("商品情報の取得に失敗しました", error);
      }
    };
    fetchCustomer();
  }, [id]);

  if (!customer) {
    return<div>Loading...</div>
  }

  return (
    <div>
      <h2>顧客詳細</h2>
      <p>名前:{ customer[0].name }</p>
      <p>email:{ customer[0].email }</p>
      <p>電話番号:{ customer[0].phone }</p>
      <p>住所:{ customer[0].address }</p>
      <p>会社名:{ customer[0].company_name }</p>
    </div>
  );
};

export default CustomerDetailPage;
