"use client";
import React, { useState } from "react";
import { loginUser } from "@/services/dangnhap"; // Đảm bảo đường dẫn chính xác

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); 
  const [successMessage, setSuccessMessage] = useState<string | null>(null); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setError(null); 
    setSuccessMessage(null); 

    if (!email || !password) {
      setError('Email và mật khẩu là bắt buộc.');
      return;
    }

    try {
      const data = await loginUser(email, password);
      console.log('Dữ liệu trả về từ API:', data);
      setSuccessMessage('Đăng nhập thành công!'); 

    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      if (error instanceof Error) {
        if (error.message.includes("Email")) {
          setError('Email không đúng. Vui lòng nhập lại.');
        } else if (error.message.includes("mật khẩu")) {
          setError('Mật khẩu không đúng. Vui lòng nhập lại.');
        } else {
          setError('Không thể đăng nhập. Vui lòng kiểm tra thông tin của bạn.');
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden lg:block w-1/2 bg-cover bg-center">
          <img src="../images/login.jpg" alt="Đăng nhập" />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Đăng nhập</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
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
                required 
              />
            </div>
            {error && <div className="mt-4 text-red-500 text-center">{error}</div>} 
            {successMessage && <div className="mt-4 text-green-500 text-center">{successMessage}</div>} 
            <button type="submit" className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Đăng nhập</button>
          </form>
          <div className="mt-4 text-center">
            <a href="/QuenMatKhau" className="text-sm text-blue-600 hover:underline">Quên mật khẩu?</a>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm">Bạn chưa có tài khoản? <a href="/Register" className="text-blue-600 hover:underline">Đăng ký ngay</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}