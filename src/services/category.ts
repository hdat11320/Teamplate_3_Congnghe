

// Lấy danh sách danh mục
export const getCategories = async () => {
  try {
    const response = await fetch('/api/auth/category', {
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

console.log(getCategories);
// Tạo danh mục mới
export const createCategory = async (categoryData: { name: string }) => {
  try {
    const response = await fetch('/api/auth/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData), // Chuyển categoryData thành JSON
    });
    if (!response.ok) {
      throw new Error('Không thể tạo danh mục');
    }
    const result = await response.json(); // Lấy dữ liệu trả về từ API
    return result;
  } catch (error) {
    console.error('Lỗi khi tạo danh mục:', error);
    throw error;
  }
};


// Cập nhật danh mục
export const updateCategory = async (categoryId: string, categoryData: { name: string }) => {
  try {
    const response = await fetch(`/api/auth/category/${categoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData), // Chuyển categoryData thành JSON
    });
    if (!response.ok) {
      throw new Error('Không thể cập nhật danh mục');
    }
    const result = await response.json(); // Lấy dữ liệu trả về từ API
    return result;
  } catch (error) {
    console.error('Lỗi khi cập nhật danh mục:', error);
    throw error;
  }
};


// Xóa danh mục
export const deleteCategory = async (categoryId: string) => {
  try {
    const response = await fetch(`/api/category/${categoryId}`, {
      method: 'DELETE', // Phương thức DELETE
    });
    if (!response.ok) {
      throw new Error('Không thể xóa danh mục');
    }
    const result = await response.json(); // Lấy dữ liệu trả về từ API nếu cần thiết
    return result;
  } catch (error) {
    console.error('Lỗi khi xóa danh mục:', error);
    throw error;
  }
};

