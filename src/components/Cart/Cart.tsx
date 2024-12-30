'use client';

import React, { useEffect, useState } from 'react';
import { getCart } from '@/services/cart';// Đường dẫn đến hàm getCart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart();
                setCartItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    if (loading) {
        return <div>Đang tải giỏ hàng...</div>;
    }

    if (error) {
        return <div>Lỗi: {error}</div>;
    }

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div id="content" className="site-content">
            <div className="page-header flex items-center">
                <div className="container mx-auto">
                    <div className="inner flex items-center justify-between">
                        <h1 className="page-title">Cart Page</h1>
                        <ul id="breadcrumbs" className="breadcrumbs list-none flex space-x-2">
                            <li><a href="index.html" className="text-blue-600">Home</a></li>
                            <li className="active text-gray-500">Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <section className="shop-cart mt-4">
                <div className="container mx-auto">
                    <table className="shop-cart-table w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="product-name text-left p-2">Product</th>
                                <th className="product-price text-right p-2">Price</th>
                                <th className="product-quantity text-right p-2">Quantity</th>
                                <th className="product-subtotal text-right p-2">Subtotal</th>
                                <th className="product-remove text-right p-2">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length === 0 ? (
                                <tr>
                                    <td  className="text-center p-4">Giỏ hàng của bạn đang trống.</td>
                                </tr>
                            ) : (
                                cartItems.map((item) => (
                                    <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item">
                                        <td className="product-cart-item" data-title="Product">
                                            <div className="cart-item flex items-center"> 
                                                <div className="thumb">
                                                    <a href="single-product.html">
                                                        <img src={item.image} alt="" className="w-16 h-16 object-cover"/>
                                                    </a>
                                                </div>
                                                <div className="entry-header ml-4">
                                                    <h6><a href="single-product.html" className="text-blue-600">{item.productName}</a></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-price text-right p-2"><span className="amount"><span>$</span>{item.price}</span></td>
                                        <td className="product-quantity text-right p-2">
                                            <input type="number" className="border rounded p-1 w-16" step="1" min="0" name="cart" value={item.quantity} readOnly />
                                        </td>
                                        <td className="product-subtotal text-right p-2"><span className="amount"><span>$</span>{item.price * item.quantity}</span></td>
                                        <td className="product-remove text-right p-2">
                                            <a href="#" className="remove"><FontAwesomeIcon icon={faXmark} /></a>
                                        </td>
                                    </tr>
                                ))
                            )}
                            <tr>
                                <td className="actions text-right p-2" >
                                    <div className="flex items-center">
                                        <input type="text" name="coupon_code" className="input-text border rounded p-1" id="coupon_code" placeholder="Coupon code" /> 
                                        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 ml-2">Apply</button>
                                    </div>
                                    <button type="submit" className="bg-gray-400 text-white rounded px-4 py-2 ml-2" disabled>Update cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cart-collaterals mt-4">
                        <div className="cart_totals bg-gray-100 p-4 rounded">
                            <h5 className="font-bold">Cart totals</h5>
                            <table className="shop_table w-full">
                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td className="text-right"><span className="amount"><span>$</span>{subtotal.toFixed(2)}</span></td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td className="text-right font-bold"><strong><span className="amount"><span>$</span>{subtotal.toFixed(2)}</span></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="wc-proceed-to-checkout mt-4">
                                <a href="checkout.html" className="bg-blue-600 text-white rounded px-4 py-2 w-full text-center">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}