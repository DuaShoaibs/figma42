import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Export the Product type so other files can use it
export type Product = { 
  id: string; 
  name: string; 
  price: string; // Keep as string since JSON stores prices as strings
  image: string; 
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  setCart: (cart: Product[]) => void;
  cartCount: number;
};

type CartProviderProps = { children: ReactNode };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
