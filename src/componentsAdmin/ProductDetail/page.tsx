'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Để lấy tham số từ URL
import { getProductById } from '../../services/product'; // API service

const ProductDetail = () => {
  const { id } = useParams() as { id: string }; // Lấy `id` từ URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id); // Gọi API lấy thông tin sản phẩm
        setProduct(data); // Lưu sản phẩm vào state
      } catch (err) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', err);
        setError('Không thể tải thông tin sản phẩm.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p>Đang tải thông tin sản phẩm...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Sản phẩm không tồn tại.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      {loading ? (
        <p>Đang tải chi tiết sản phẩm...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : product ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Mã sản phẩm:</strong> {product.code}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Slug:</strong> {product.slug}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Loại:</strong> {product.type}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Giá:</strong> ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Kích thước:</strong> {product.width}cm (rộng) x {product.length}cm (dài) x {product.height}cm (cao)
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Mô tả ngắn:</strong> {product.short_description}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Mô tả:</strong> {product.description}
          </p>
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Không có ảnh sản phẩm</span>
            </div>
          )}
        </div>
      ) : (
        <p>Không tìm thấy sản phẩm.</p>
      )}
    </div>
  );
};  

export default ProductDetail;
