const customerController = require("../models/customerModel");

// すべての顧客情報を取得
exports.allCustomer = async (req, res) => {
  try {
    const customers = await customerController.findAll();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// IDから顧客情報を取得
exports.getCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await customerController.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 顧客情報を編集
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, company_name } = req.body;

  try {
    await customerController.updateById(id, { name, email, phone, address, company_name });
    res.status(200).json({ message: "Customer updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 顧客情報を削除
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    await customerController.deleteById(id);
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 顧客情報を追加
exports.postCustomer = async (req, res) => {
  const { name, email, phone, address, company_name } = req.body;

  // 必須項目のチェック
  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "必要な情報が不足しています。" });
  }

  try {
    const result = await customerController.create({ name, email, phone, address, company_name });
    res.status(201).json({ message: "ユーザーが追加されました。", customer: result });
  } catch (err) {
    res.status(500).json({ message: "ユーザーの追加に失敗しました。", error: err.message });
  }
};





