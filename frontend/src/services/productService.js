//API呼び出し

import api from './api.js';

//顧客一覧取得
export const allCustomer = (id) => {
  return api.get(`/customers`);
};
//顧客詳細取得
export const getCustomer = (id) => {
  return api.get(`/customers/${id}`);
};
//顧客追加
export const postCustomer = (id) => {
  return api.post(`/customers`);
};
//顧客更新
export const updateCustomer = (id) => {
  return api.put(`/customers/${id}`);
};
//顧客削除
export const deleteCustomer = (id) => {
  return api.delete(`/customers/${id}`);
};
