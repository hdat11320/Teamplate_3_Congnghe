'use client'
import React from 'react';
import { useState } from 'react';
// import './cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
          id: 1,
          name: 'Hoodie with Logo',
          price: 39.99,
          quantity: 1,
          image: 'https://lh3.googleusercontent.com/6qqZ1fbbgUAgyZd26YOE75FoXF7dGRPLO1k5jUk4a78IK9KhpSMXgZbOmAsdFqEwDYBLsA=s85',
        },
        {
            id: 2,
            name: 'T-Shirt with Logo',
            price: 59.99,
            quantity: 1,
            image: 'https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/product-5.jpg',
        },
      ]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        const updatedCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        ); 
        setCartItems(updatedCartItems);
    };

    const handleRemoveItem = (id: number) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    };

    return (
    <div className="">
      <div className="container mx-auto my-8 px-4">
        <p className="text-black font-bold text-xl">Product: Hoodie with Logo</p>
        <table className="shop-cart-table shop_table_responsive w-full text-sm md:text-base">
          <thead>
              <tr>
                <th className="product-name text-left p-2">Product</th>
                <th className="product-price-title text-left p-2">Price</th>
                <th className="product-quantity text-left p-2">Quantity</th>
                <th className="product-subtotal text-left p-2">Total</th>
                <th className="product-remove p-2">&nbsp;</th>
              </tr>
          </thead>
          <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item border-b">
              <td className="product-cart-item p-2">
                <div className="flex items-center space-x-4">
                  <div className="thumb w-16 md:w-20">
                    <img src={item.image} alt={item.name} className="w-full" />
                  </div>
                  <div className="info">
                    <h6 className="text-base font-semibold">{item.name}</h6>
                  </div>
                </div>
              </td>
              <td className="product-price p-2">
                <span className="amount">${item.price}</span>
              </td>
              <td className="product-quantity p-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  className="w-12 border border-gray-300 p-1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </td>
              <td className="product-subtotal p-2">
                  <span className="amount">${item.price * item.quantity}</span>
              </td>
              <td className="product-remove p-2">
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-600">X</button>
              </td>
            </tr>
          ))}
          </tbody>  
        </table>  
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <input type="text" placeholder="Coupon code" className="border border-gray-300 p-2 w-full md:w-auto" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3 mt-2 md:mt-0">
              APPLY
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            UPDATE CART
          </button>
        </div>
        <div className="cart-totals mt-8 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-xl font-bold mb-4">Cart totals</h4>
          <ul className="space-y-2">
              <li className="flex justify-between">Subtotal <span className="price font-semibold">$99.98</span></li>
              <li className="flex justify-between">Total <span className="price font-semibold">$99.98</span></li>
          </ul>
          <button className="btn-checkout bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
