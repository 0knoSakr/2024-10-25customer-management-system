import React, { useState } from "react";
import { postCustomer } from "../services/customerService";

const CustomerForm = () => {
  // 入力状態
  const [formData, setFormData] = useState({
    name: "", // customerName -> name に変更
    email: "",
    phone: "",
    address: "",
    company_name: "", // companyName -> company_name に変更
  });

  // エラーメッセージ状態
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  // バリデーション関数
  const validate = (field, value) => {
    if (field === "company_name" && !value) return null; // company_nameは任意項目なのでバリデーションは不要

    const minLength = 1;
    const maxLength = 255;

    if (!value) return "この項目は入力必須です";
    if (value.length < minLength || value.length > maxLength)
      return `${minLength}〜${maxLength}文字以内で入力してください`;

    if (field === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value))
        return "正しいメールアドレスの形式で入力してください";
    }

    if (field === "phone") {
      const phonePattern = /^[0-9]+$/;
      if (!phonePattern.test(value))
        return "電話番号は数字のみで入力してください";
    }

    return null;
  };

  // 入力変更時の処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validate(field, formData[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await postCustomer(formData);
        setSubmitStatus("データが正常に追加されました。");
      } catch (error) {
        setSubmitStatus("データの追加に失敗しました。");
        console.error("エラー詳細:", error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "email", "phone", "address", "company_name"].map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            {field === "name"
              ? "顧客名:"
              : field === "email"
              ? "メールアドレス:"
              : field === "phone"
              ? "電話番号:"
              : field === "address"
              ? "住所:"
              : field === "company_name"
              ? "会社名:"
              : field}
          </label>
          <input
            type="text"
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`${
              field === "name"
                ? "顧客名"
                : field === "email"
                ? "メールアドレス"
                : field === "phone"
                ? "電話番号"
                : field === "address"
                ? "住所"
                : field === "company_name"
                ? "会社名"
                : field
            }を入力`}
          />
          {errors[field] && <span style={{ color: "red" }}>{errors[field]}</span>}
        </div>
      ))}
      <button type="submit">保存</button>
      {submitStatus && <p>{submitStatus}</p>}
    </form>
  );
};

export default CustomerForm;
