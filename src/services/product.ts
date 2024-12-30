
// Lấy danh sách sản phẩm
export const getProducts = async () => {
    try {
      const response = await fetch('/api/client/product', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // In dữ liệu để kiểm tra
      console.log('Dữ liệu trả về từ API:', data);
  
      return data.data; // Lấy danh sách từ `data`
    } catch (error) {
      console.error('Lỗi khi fetch danh sách sản phẩm:', error);
      throw error;
    }
  };
  
  // Lấy chi tiết sản phẩm theo ID
  export const getProductById = async (id: string) => {
    try {
      const response = await fetch(`/api/client/product/${id}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // In dữ liệu để kiểm tra
      console.log(`Chi tiết sản phẩm với ID ${id}:`, data);
  
      return data.data; // Lấy thông tin chi tiết từ `data`
    } catch (error) {
      console.error(`Lỗi khi fetch chi tiết sản phẩm với ID ${id}:`, error);
      throw error;
    }
  };
  