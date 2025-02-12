'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../components/CartContext'; // Adjust path as needed

const products = [
  { id: '1', name: 'Product 1', price: 49.99, image: '/products/product1.png' },
  { id: '2', name: 'Product 2', price: 59.99, image: '/products/product2.png' },
  { id: '3', name: 'Product 3', price: 69.99, image: '/products/product3.png' },
  { id: '4', name: 'Product 4', price: 79.99, image: '/products/product4.png' },
  { id: '5', name: 'Product 5', price: 89.99, image: '/products/product5.png' },
  { id: '6', name: 'Product 6', price: 99.99, image: '/products/product6.png' },
  { id: '7', name: 'Product 7', price: 109.99, image: '/products/product7.png' },
  { id: '8', name: 'Product 8', price: 119.99, image: '/products/product8.png' },
  { id: '9', name: 'Product 9', price: 129.99, image: '/products/product9.png' },
  { id: '10', name: 'Product 10', price: 139.99, image: '/products/product10.png' },
  { id: '11', name: 'Product 11', price: 149.99, image: '/products/product11.png' },
  { id: '12', name: 'Product 12', price: 159.99, image: '/products/product12.png' },
];

export default function ProductPage() {
  const { addToCart } = useCart(); // Get addToCart function from context

  return (
    <div className="product-page px-4 md:px-8">
      <h1 className="text-left text-3xl font-bold mx-auto mt-11 mb-8 max-w-screen-lg">Products</h1>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
        {products.map((product) => (
          <div key={product.id} className="p-4 rounded shadow-md bg-white">
            <Link href={`/products/${product.id}`} className="block">
              <div className="cursor-pointer group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={312}
                  className="w-full h-[312px] object-contain mb-4 rounded group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              </div>
            </Link>
            {/* ✅ Fixed: Ensured price is a number */}
            <p className="text-sm text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button
  onClick={() => addToCart({ ...product, price: String(product.price) })} // ✅ Convert price to string
  className="w-10 h-10 md:w-8 md:h-8 bg-gray-200 rounded-md hover:bg-blue-500 flex justify-center items-center"
>
  <Image src="/Cart.png" alt="Add to Cart" width={16} height={16} />
</button>

          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-8 mt-16 w-full">
        <div className="text-center">
          <p className="text-black text-2xl md:text-4xl mb-4">Or subscribe to the newsletter.</p>
          <div className="flex justify-center items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-48 md:w-64 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="bg-transparent border border-l-0 border-gray-300 rounded-r-md px-4 md:px-6 py-2 text-blue-500 underline hover:no-underline">
              Submit
            </button>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-12 mb-6">Follow Products And Discounts On Instagram</h3>
          <div className="flex justify-center gap-4 flex-wrap mb-20 mt-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/products/product${num}.png`}
                alt={`Product ${num}`}
                width={100}
                height={100}
                className="w-24 h-24 md:w-32 md:h-32 rounded object-cover transform transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
