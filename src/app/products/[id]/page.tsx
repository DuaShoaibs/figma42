'use client';

import { useCart } from '../../components/CartContext'; // Adjust path as needed
import Image from 'next/image';
import Link from 'next/link';
import products from '../../data/products.json'; // Adjust path to your data file
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams(); // Get product ID from URL params
  const { addToCart, cart } = useCart(); // Access cart context

  // Find the product by ID
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  // Get featured products (first 5 products as an example)
  const featuredProducts = products.slice(0, 5);
  const productImage = product.image || '/fallback-image.jpg';

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Product Image */}
        <div className="flex justify-center w-full h-full">
          <Image src={productImage} alt={product.name} width={400} height={400} className="object-cover" />
        </div>

        {/* Product Details */}
        <div className="w-full px-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl bg-blue-500 text-white font-semibold rounded-full inline-block px-4 py-1 mb-4">
            {product.price}
          </p>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* Add to Cart Button */}
        {/* Add to Cart Button */}
<button
  onClick={() => addToCart(product)}
  className={`flex items-center px-4 py-2 ${
    cart.some((item) => item.id === product.id) ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
  } text-white rounded-lg`}
  disabled={cart.some((item) => item.id === product.id)}
>
  <Image src="/Cart.png" alt="Cart Icon" width={16} height={16} className="mr-2" />
  {cart.some((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}
</button>

        </div>
      </div>

      {/* Featured Products Section */}
      <section className="featured-section-container">
        <h2 className="featured-section-title">F.Products</h2>
        <div className="featured-section-wrapper">
          {featuredProducts.map((featuredProduct) => (
            <div key={featuredProduct.id} className="featured-section-card">
              <Link href={`/products/${featuredProduct.id}`}>
                <Image
                  src={featuredProduct.image || '/fallback-image.jpg'}
                  alt={featuredProduct.name}
                  width={315}
                  height={315}
                  className="featured-section-image"
                />
              </Link>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="featured-section-name">{featuredProduct.name}</h3>
                  <p className="featured-section-price">{featuredProduct.price}</p>
                </div>
                <button
                  onClick={() => addToCart(featuredProduct)}
                  className={`featured-section-button ${cart.some((item) => item.id === featuredProduct.id) ? 'bg-gray-400' : 'bg-gray-200 hover:bg-blue-500'}`}
                  disabled={cart.some((item) => item.id === featuredProduct.id)}
                >
                  <Image src="/Cart.png" alt="Add to Cart" width={16} height={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
