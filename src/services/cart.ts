export const getCart = async () => {
    try {
      const response = await fetch('/api/auth/cart', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      
      // In dữ liệu để kiểm tra
      console.log('Dữ liệu trả về từ API giỏ hàng:', data);
  
      return data.data; // Lấy danh sách từ `data` trong cấu trúc dữ liệu bạn đã chia sẻ
    } catch (error) {
      console.error('Lỗi khi fetch dữ liệu giỏ hàng:', error);
      throw error;
    }
  };