// services/dangky.ts

interface UserRegistrationResponse {
    success: boolean;
    message: string;
    data?: {
      id: string; // Hoặc number, tùy thuộc vào cấu trúc dữ liệu của bạn
      name: string;
      email: string;
      phone: string;
      // Thêm các thuộc tính khác nếu cần
    };
  }
  
  export const registerUser = async (
      name: string,
      email: string,
      phone: string,
      password: string,
      passwordConfirmation: string
  ): Promise<UserRegistrationResponse> => { // Sử dụng kiểu UserRegistrationResponse
      try {
          console.log('Dữ liệu gửi đi:', { name, email, phone, password, password_confirmation: passwordConfirmation });
  
          const response = await fetch('http://localhost:3000/api/auth/user/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name,
                  email,
                  phone,
                  password,
                  password_confirmation: passwordConfirmation,
              }),
          });
  
          if (!response.ok) {
              const errorData = await response.json();
              console.error('Lỗi từ server:', errorData);
              throw new Error(errorData.message || 'Network response was not ok');
          }
  
          const data: UserRegistrationResponse = await response.json(); // Sử dụng kiểu dữ liệu đã định nghĩa
          return data;
      } catch (error) {
          console.error('Lỗi khi đăng ký người dùng:', error);
          throw error;
      }
  };