"use client";

import React, { useState } from "react";
import { registerUser } from "@/services/dangky"; // Đảm bảo đường dẫn chính xác

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!name || !email || !phone || !password || !passwordConfirmation) {
      setError('Tất cả các trường đều bắt buộc.');
      return;
    }
    if (password !== passwordConfirmation) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    try {
      const data = await registerUser(name, email, phone, password, passwordConfirmation);
      console.log('Dữ liệu trả về từ API:', data);
      setSuccessMessage('Đăng ký thành công! Bạn sẽ được chuyển hướng đến trang đăng nhập.');

      // Tự động chuyển hướng sau 2 giây
      setTimeout(() => {
        window.location.href = '/Login'; // Chuyển hướng đến trang đăng nhập
      }, 2000);
      
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      setError('Không thể đăng ký. Vui lòng kiểm tra thông tin của bạn.');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="hidden lg:block w-1/2 bg-cover bg-center">
            <img src="../images/dangky.jpg" alt="Đăng ký" />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Đăng ký</h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-600">Họ và tên</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Số điện thoại</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Mật khẩu</label>
                <input
                  type="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Nhập lại mật khẩu"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
              {successMessage && <div className="mt-4 text-green-500 text-center">{successMessage}</div>}
              <button type="submit" className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Đăng ký ngay</button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm">Bạn đã có tài khoản? <a href="/Login" className="text-blue-600 hover:underline">Đăng nhập</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}