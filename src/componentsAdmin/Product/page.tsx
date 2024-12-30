'use client';

import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data.data); // Gán danh sách sản phẩm vào state
      } catch (error: any) {
        setError('Không thể tải danh sách sản phẩm');
        console.error('Lỗi khi tải danh sách sản phẩm:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); // Gọi API khi component được mount
  }, []);

  if (loading) {
    return <p>Đang tải sản phẩm...</p>; // Hiển thị thông báo đang tải
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>; // Hiển thị thông báo lỗi
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.slice(0, 9).map((product: any) => (
        <div
          key={product.id}
          className="relative text-center p-4 bg-white rounded-lg shadow-md"
        >
          {product.sale && (
            <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm z-10">
              SALE
            </span>
          )}
  
          <div className="relative">
            {/* Hình ảnh sản phẩm */}
            <img
              src={product.thumbnail || '/path/to/default-image.jpg'} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
  
          {/* Tên sản phẩm */}
          <h2 className="text-lg font-bold">{product.name}</h2>
  
          {/* Sao đánh giá sản phẩm */}
          {product.rating && (
            <div className="text-yellow-500 text-xl">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={index < product.rating ? 'text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
          )}
  
          {/* Giá sản phẩm */}
          <p className="text-blue-500 mt-2">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;