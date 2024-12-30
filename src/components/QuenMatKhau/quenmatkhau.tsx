
import React from "react";
export default function Forgot() {
  return (
    <>


        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white rounded-lg shadow-lg flex overflow-hidden">
            <div className="flex items-center justify-center hidden lg:block w-1/2 bg-cover  bg-center" >
                    <img src="../images/quenmatkhau.jpg" alt="Quên mật khẩu"  />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center">Quên mật khẩu</h2>
                    <p className="mt-2 text-center text-gray-600">Vui lòng nhập thông tin bên dưới</p>
                    <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-600"></label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="0123456789" />
                        </div>
                        
                    <form className="mt-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Nhập mã xác nhận OTP gửi đến:</label>
                            <div className="flex space-x-2 mt-1">
                                <input type="text" className="block w-12 p-2 border border-gray-300 rounded-md text-center" placeholder="1" />
                                <input type="text" className="block w-12 p-2 border border-gray-300 rounded-md text-center" placeholder="2" />
                                <input type="text" className="block w-12 p-2 border border-gray-300 rounded-md text-center" placeholder="3" />
                                <input type="text" className="block w-12 p-2 border border-gray-300 rounded-md text-center" placeholder="4" />
                                <input type="text" className="block w-12 p-2 border border-gray-300 rounded-md text-center" placeholder="5" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-600">Mã xác nhận</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập mã xác nhận" />
                        </div>
                        <button type="submit" className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Xác thực</button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm">Mã không nhận được? <a href="#" className="text-blue-600 hover:underline">Gửi lại</a></p>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-sm">Nếu không nhớ được mật khẩu? <a href="/Login" className="text-blue-600 hover:underline">Trở lại</a></p>
                    </div>
                </div>
            </div>
        </div>
 
    </>
  );
}
