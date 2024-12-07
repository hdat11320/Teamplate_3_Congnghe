// components/ProductCard.tsx
'use client'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ProductProps {
  image: string;
  title: string;
  price: string;
  sale: boolean;
  star: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, price, sale, star }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sale && (
        <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm z-10">
          SALE
        </span>
      )}

<div className="relative">
  {/* Hình ảnh sản phẩm */}
  <img 
    src={image} 
    alt={title} 
    className="w-full h-48 object-cover rounded-md mb-4" 
  />

  {/* Nút Add to Cart xuất hiện khi hover */}
  {isHovered && (
    <button 
      className="absolute w-full h-1/3 bottom-2 bg-purple-800 text-white opacity-0 transition-opacity duration-700 ease-in-out transform translate-y-4 hover:opacity-90 hover:translate-y-0 flex justify-center items-center text-lg font-semibold"
    >
      Add to Cart
    </button>
  )}
</div>

      {/* Tên sản phẩm */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Sao đánh giá sản phẩm */}
      {star && (
        <span className="text-yellow-500 text-xl">
      <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </span>
      )}
      {/* Giá sản phẩm */}
      <p className="text-blue-500 mt-2">{price}</p>
    </div>
  );
};

export default ProductCard;
