"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Để lấy tham số từ URL
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getProductById } from '@/services/product';

// Định nghĩa interface cho sản phẩm
interface Product {
  id: string; // Hoặc number, tùy thuộc vào kiểu dữ liệu của ID
  name: string;
  description: string;
  price: number;
}

const ProductDetail = () => {
  const { id } = useParams() as { id: string }; // Lấy `id` từ URL
  const [product, setProduct] = useState<Product | null>(null); // Sử dụng kiểu Product
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id); // Gọi API để lấy thông tin sản phẩm
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

  return (
    <section className="container mx-auto py-16">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2 relative">
          <div className="absolute flex justify-center items-center rounded-full bg-white w-10 h-10 right-5 top-5">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <img
            src="/images/product/single-product-1.jpg"
            alt="T-Shirt with Logo"
            className="w-full max-w-md"
          />
          <div className="flex space-x-4 mt-4">
            <img
              src="/images/product/single-product-1.jpg"
              alt="Thumbnail 1"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-2.jpg"
              alt="Thumbnail 2"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-3.jpg"
              alt="Thumbnail 3"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-4.jpg"
              alt="Thumbnail 4"
              className="w-24 h-24 object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-2">
          {loading ? (
            <p>Đang tải chi tiết sản phẩm...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : product ? (
            <>
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="ml-2 text-gray-600">(1 customer review)</span>
              </div>
              <p className="text-xl font-semibold mb-4 text-cyan-500">${product.price.toFixed(2)}</p>
              <p className="mb-6">{product.description}</p>
              <div className="flex items-center space-x-4 mb-6 uppercase">
                <button className="bg-gray-100 text-black px-10 py-3">1</button>
                <button className="bg-purple-800 text-white px-7 py-3 hover:bg-teal-600 uppercase font-bold">Add to Cart</button>
              </div>
              <div className="mt-6">
                <hr />
                <p>
                  <strong className="font-bold text-black uppercase">SKU:</strong> 124224
                </p>
                <p>
                  <strong className="font-bold text-black uppercase">Categories:</strong> Case & Bags, Clothes
                </p>
                <p>
                  <strong className="font-bold text-black uppercase">Tags:</strong> accessories, business
                </p>
              </div>
            </>
          ) : (
            <p>Không tìm thấy sản phẩm.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;