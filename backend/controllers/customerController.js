const customerController = require("../models/customerModel");

exports.allCustomer = (req, res) => {
  customerController.findAll((err, customers) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(customers);
  });
};

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

exports.deleteCustomer = (req, res) => {
  const { id } = req.params;

  customerController.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Customer deleted successfully" });
  });
};

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
