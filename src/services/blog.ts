
export const getPosts = async () => {
    try {
        const response = await fetch('/api/auth/post', {
          method: 'GET',
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        
        // In dữ liệu để kiểm tra
        console.log('Dữ liệu trả về từ API:', data);
    
        return data.data; // Lấy danh sách từ `data` trong cấu trúc dữ liệu bạn đã chia sẻ
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error);
        throw error;
      }
  };
  