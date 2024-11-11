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
export const postCustomer = (data) => {
  return api.post(`/customers`, data);
};
//顧客更新
export const updateCustomer = (id, data) => {
  return api.put(`/customers/${id}`, data);
};
//顧客削除
export const deleteCustomer = (id) => {
  return api.delete(`/customers/${id}`);
};
