import React, { useEffect, useState } from 'react';
import api from '../services/api'; // APIサービスをインポート
import CustomerList from '../components/CustomerList'; // 顧客一覧コンポーネントをインポート

const CustomerListPage = () => {
  const [customers, setCustomers] = useState([]); // 顧客データを保存するステート
  const [loading, setLoading] = useState(true); // ローディング状態
  const [error, setError] = useState(null); // エラー情報を保存するステート

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('/customers'); // 顧客データを取得
        setCustomers(response.data); // 顧客データをステートにセット
      } catch (err) {
        setError(err); // エラーをステートにセット
      } finally {
        setLoading(false); // ローディングを終了
      }
    };

    fetchCustomers(); // APIから顧客データを取得
  }, []);

  if (loading) return <div>Loading...</div>; // ローディング中の表示
  if (error) return <div>Error: {error.message || "An unexpected error occurred"}</div>; // エラー発生時の表示

  return (
    <div>
      <h1>顧客一覧</h1>
      <CustomerList customers={customers} /> {/* 顧客データを渡す */}
    </div>
  );
};

export default CustomerListPage;
