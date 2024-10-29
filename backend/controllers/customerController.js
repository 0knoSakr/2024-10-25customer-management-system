// 顧客情報のCRUDロジック
const customerController = require("../models/customerModel");

// 全ての顧客情報を取得
exports.allCustomer = (req, res) => {
  customerController.findAll((err, customers) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(customers);
  });
  console.lof()
};

//顧客詳細取得
exports.getCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await customerController.findById(customerId, 'name email address orders'); // 必要なフィールドのみ取得

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// 顧客情報を更新
exports.updateCustomer = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  customerController.updateById(
    id,
    { name, email, phone, address },
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(200).json({ message: "Customer updated successfully" });
    }
  );
};

// 顧客情報を削除
exports.deleteCustomer = (req, res) => {
  const { id } = req.params;

  customerController.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Customer deleted successfully" });
  });
};

//顧客追加
exports.postCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "必要な情報が不足しています。" });
  }
  try {
    const newCustomer = new Customer({
      name,
      email,
      phone,
      address
    });
    await newCustomer.save();
    return res.status(201).json({ message: "ユーザーが追加されました。", customer: newCustomer });
  } catch (error) {
    return res.status(500).json({ message: "ユーザーの追加に失敗しました。", error: error.message });
  }
};
