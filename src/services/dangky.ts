// services/dangky.ts
export const registerUser = async (
    name: string, // Thêm tham số cho name
    email: string, // Thêm tham số cho email
    phone: string,
    password: string,
    passwordConfirmation: string
): Promise<any> => {
    try {
        console.log('Dữ liệu gửi đi:', { name, email, phone, password, password_confirmation: passwordConfirmation });

        const response = await fetch('http://localhost:3000/api/auth/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, // Thêm name vào body
                email, // Thêm email vào body
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

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi đăng ký người dùng:', error);
        throw error;
    }
};