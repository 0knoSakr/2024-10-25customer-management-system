//顧客詳細画面
import React, { useState, useEffect } from 'react';
import api from '../services/api';//データを取得するためのapi
import { useParams } from 'react-router-dom';//idから情報をとれるようになる
import CustomerDetail from '../components/CustomerDetail';

const CustomerDetailPage = () => {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/customers/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("顧客情報の取得に失敗しました", error);
      }
    };
    fetchCustomer();
  }, [id]);

  if (!customer) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>顧客詳細</h1>
      <CustomerDetail customer={ customer }/>
    </div>
  );
};

export default CustomerDetailPage;
