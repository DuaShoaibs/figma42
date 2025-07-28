'use client';
import React from "react";
import { useCart, Product } from "../components/CartContext"; 

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart(); // ✅ Remove addToCart and setCart, they are unused
return (
  <div className="container mx-auto py-8 px-4 lg:px-48 flex flex-col lg:flex-row gap-8">
    {/* Bag Section */}
    <div className="w-full lg:w-2/3 bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Bag</h2>
      <div className="divide-y">
        {cart.length > 0 ? (
          cart.map((product: Product) => (
            <div key={product.id} className="flex flex-col md:flex-row items-start md:items-center py-4">
              {/* Image */}
              <div className="w-full md:w-1/4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto max-h-32 object-contain rounded" 
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 px-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm">Price: ${product.price}</p>
              </div>

              {/* Remove Button */}
              <button 
                className="p-2 border rounded-full hover:bg-gray-100 flex items-center mt-2 md:mt-0"
                onClick={() => removeFromCart(product.id)}
              >
                <img src="/bin.png" alt="Remove" className="w-5 h-5" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
      </div>
      {/* Summary Section */}
      <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p> {/* ✅ Use calculated total */}
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button className="w-full mt-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
