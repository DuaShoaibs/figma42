'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the product type
export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

// Define the context shape
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void; // ✅ Add removeFromCart
  cartCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // ✅ Remove from Cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== id));
  };

  // ✅ Calculate total
  const total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount: cart.length, total }}>
      {children}
    </CartContext.Provider>
  );
};
