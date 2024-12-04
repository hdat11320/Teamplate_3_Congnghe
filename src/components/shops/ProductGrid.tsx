// components/ProductGrid.tsx

import ProductCard from "./ProductCard";

interface Product {
  image: string;
  title: string;
  price: string;
  sale: boolean;
  star: boolean;
}

const products: Product[] = [
  { image: '/images/product/product-1.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: true },
  { image: '/images/product/product-2.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: true },
  { image: '/images/product/product-3.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: true },
  { image: '/images/product/product-4.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: false },
  { image: '/images/product/product-3.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: false  },
  { image: '/images/product/product-4.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: false  },
  { image: '/images/product/product-1.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: false  },
  { image: '/images/product/product-2.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: false  },
  { image: '/images/product/product-3.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: false  },
  { image: '/images/product/product-4.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: false  },
  { image: '/images/product/product-3.jpg', title: 'T-Shirt with Logo', price: '$19.99', sale: false, star: false  },
  { image: '/images/product/product-4.jpg', title: 'Hoodie with Logo', price: '$39.99', sale: true, star: false  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
