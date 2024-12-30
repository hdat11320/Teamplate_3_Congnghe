// services/dangnhap.ts
export const loginUser = async (email: string, password: string) => {
    const response = await fetch("/login", { // Đảm bảo đường dẫn đúng
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Đăng nhập thất bại");
    }

    const data = await response.json();
    console.log("Đăng nhập thành công:", data);
    return data;
};