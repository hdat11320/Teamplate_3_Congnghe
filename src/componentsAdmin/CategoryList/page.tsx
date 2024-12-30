'use client';
import React, { useEffect, useState } from 'react';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../services/category';

// Định nghĩa interface cho danh mục
interface Category {
  id: string; // Hoặc number, tùy thuộc vào kiểu dữ liệu của ID
  name: string;
  code: string;
  lang: string;
  store_id: string; // Hoặc number nếu cần
}

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Sử dụng kiểu Category[]
  const [error, setError] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState<string>(''); // Trạng thái cho việc thêm danh mục
  const [editCategory, setEditCategory] = useState<Category | null>(null); // Trạng thái cho việc sửa danh mục

  // Lấy danh mục
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error: any) {
        setError('Có lỗi xảy ra khi lấy danh mục');
        console.error('Lỗi khi lấy danh mục:', error);
      }
    };

    fetchCategories();
  }, []);

  // Xử lý thêm danh mục
  const handleAddCategory = async () => {
    if (!newCategoryName) return; // Kiểm tra nếu không có tên danh mục

    try {
      const newCategory = await createCategory({ name: newCategoryName });
      setCategories([...categories, newCategory]);
      setNewCategoryName(''); // Reset input
    } catch (error) {
      console.error('Lỗi khi thêm danh mục:', error);
      setError('Có lỗi xảy ra khi thêm danh mục');
    }
  };

  // Xử lý sửa danh mục
  const handleEditCategory = async () => {
    if (!editCategory?.name) return;

    try {
      const updatedCategory = await updateCategory(editCategory.id, { name: editCategory.name });
      setCategories(categories.map((category) => 
        category.id === updatedCategory.id ? updatedCategory : category
      ));
      setEditCategory(null); // Đóng form sửa
    } catch (error) {
      console.error('Lỗi khi sửa danh mục:', error);
      setError('Có lỗi xảy ra khi sửa danh mục');
    }
  };

  // Xử lý xóa danh mục
  const handleDeleteCategory = async (categoryId: string) => {
    try {
      await deleteCategory(categoryId);
      setCategories(categories.filter((category) => category.id !== categoryId));
    } catch (error) {
      console.error('Lỗi khi xóa danh mục:', error);
      setError('Có lỗi xảy ra khi xóa danh mục');
    }
  };

  return (
    <div>
      <h1>Danh sách danh mục</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Form thêm danh mục */}
      <div className="mb-4">
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Nhập tên danh mục"
          className="border px-4 py-2"
        />
        <button onClick={handleAddCategory} className="ml-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
          Thêm danh mục
        </button>
      </div>

      {/* Hiển thị danh sách danh mục */}
      {Array.isArray(categories) && categories.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-t border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-600">Tên danh mục</th>
                <th className="border-t border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-600">Mã</th>
                <th className="border-t border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-600">Ngôn ngữ</th>
                <th className="border-t border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-600">ID cửa hàng</th>
                <th className="border-t border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-600">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.store_id} className="hover:bg-gray-50 transition-colors">
                  <td className="border-b border-gray-200 px-6 py-4 text-sm text-gray-700">{category.name}</td>
                  <td className="border-b border-gray-200 px-6 py-4 text-sm text-gray-700">{category.code}</td>
                  <td className="border-b border-gray-200 px-6 py-4 text-sm text-gray-700">{category.lang}</td>
                  <td className="border-b border-gray-200 px-6 py-4 text-sm text-gray-700">{category.id}</td>
                  <td className="border-b border-gray-200 px-6 py-4 text-sm text-gray-700">
                    <button
                      className="text-red-500 hover:text-red-700 focus:outline-none transition-colors"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      Xóa
                    </button>
                    <button
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none transition-colors"
                      onClick={() => setEditCategory(category)}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">Không có danh mục nào để hiển thị.</p>
      )}

      {/* Form sửa danh mục */}
      {editCategory && (
        <div className="mt-4">
          <h2>Sửa danh mục</h2>
          <input
            type="text"
            value={editCategory.name}
            onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
            className="border px-4 py-2"
          />
          <button onClick={handleEditCategory} className="ml-2 px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-700">
            Cập nhật
          </button>
          <button
            onClick={() => setEditCategory(null)}
            className="ml-2 px-4 py-2 bg-gray-500 text-white hover:bg-gray-700"
          >
            Hủy
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryList;