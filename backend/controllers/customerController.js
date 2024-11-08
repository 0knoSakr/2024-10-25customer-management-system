const customerController = require("../models/customerModel");

//すべての顧客情報を取得
exports.allCustomer = (req, res) => {
  customerController.findAll((err, customers) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(customers);
  });
};

//idから顧客情報を取得
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

//顧客情報を編集
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

//顧客情報を削除
exports.deleteCustomer = (req, res) => {
  const { id } = req.params;

  customerController.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Customer deleted successfully" });
  });
};

//顧客情報を追加
exports.postCustomer = async (req, res) => {
  const { name, email, phone, address, company_name } = req.body;

  // 必須項目のチェック
  if (!name || !email || !phone || !address) {
    return res.status(400).json({ message: "必要な情報が不足しています。" });
  }

  try {
    // company_nameが存在する場合のみ追加
    const data = new Customer({
      name,
      email,
      phone,
      address,
      company_name: company_name || null, // company_nameがなければnullを設定
    });

    await data.save();
    return res.status(201).json({ message: "ユーザーが追加されました。", customer: data });
  } catch (error) {
    return res.status(500).json({ message: "ユーザーの追加に失敗しました。", error: error.message });
  }
};
