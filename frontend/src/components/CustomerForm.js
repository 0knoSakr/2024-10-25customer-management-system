import React, { useState } from "react";

const CustomerForm = () => {
  // 入力状態
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
  });

  // エラーメッセージ状態
  const [errors, setErrors] = useState({});

  // バリデーション関数
  const validate = (field, value) => {
     // 会社名を入力していなくてもエラーメッセージを返さない
    if (field === "companyName" && !value) {
      return null;
    }
    //文字数の下限上限指定
    const minLength = 1;
    const maxLength = 255;

    //文字のバリデーション
    if (!value) return `この項目は入力必須です`;
    if (value.length < minLength || value.length > maxLength)
      return `${minLength}〜${maxLength}文字以内で入力してください`;

    //メールアドレスのバリデーション
    if (field === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value))
        return "正しいメールアドレスの形式で入力してください";
    }

    //電話番号のバリデーション
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

    // エラーメッセージの切り替え
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validate(field, formData[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("データが追加されました");
      // API呼び出し処理など
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["customerName", "email", "phone", "address", "companyName"].map(
        (field) => (
          <div key={field}>
            <label htmlFor={field}>
              {field === "customerName"
                ? "顧客名:"
                : field === "email"
                ? "メールアドレス:"
                : field === "phone"
                ? "電話番号:"
                : field === "address"
                ? "住所:"
                : field === "companyName"
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
                field === "customerName"
                  ? "顧客名"
                  : field === "email"
                  ? "メールアドレス"
                  : field === "phone"
                  ? "電話番号"
                  : field === "address"
                  ? "住所"
                  : field === "companyName"
                  ? "会社名"
                  : field
              }を入力`}
            />
            {errors[field] && <span>{errors[field]}</span>}
          </div>
        )
      )}
      <button type="submit">保存</button>
    </form>
  );
};

export default CustomerForm;
