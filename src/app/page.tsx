
"use client";
import { useCart } from "./components/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { addToCart } = useCart();

  const productNames = [
    "Library Stool Chair",
    "Modern Wooden Chair",
    "Ergonomic Office Chair",
    "Luxury Recliner",
    "Library Stool Chair",
    "Modern Wooden Chair",
    "Ergonomic Office Chair",
    "Luxury Recliner",
  ];

  const productPrices = [
    "199.99",
    "249.99",
    "149.99",
    "399.99",
    "199.99",
    "249.99",
    "149.99",
    "399.99",
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="banner flex justify-between items-center bg-blue-50 px-6 py-10 fixed top-0 left-0 right-0 z-10">
        <div className="banner-text">
          <h6 className="font-bold mb-2">WELCOME TO CHAIRY</h6>
          <h2 className="text-2xl font-semibold mb-7">
            Best Furniture Collection for Your Interior.
          </h2>
          <button className="banner-button">
            <Image src="/Button.png" alt="Shop Now" width={120} height={40} />
          </button>
        </div>
        <Image src="/1.png" alt="Chair" width={400} height={300} />
      </div>

      {/* Logos Section */}
      <section className="logo-section">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: "rgba(39, 35, 67, 1)" }}>
            Brand Logos
          </h2>
        </div>
        <div className="logo-container">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="logo-card">
              <Image src={`/logos/logo${index + 1}.png`} alt={`Logo ${index + 1}`} width={80} height={80} />
            </div>
          ))}
        </div>
      </section>

{/* Featured Products Section */}
<section className="section">
  <h2 className="section-title">Featured Products</h2>
  <div className="product-container">
    {productNames.slice(0, 4).map((productName, index) => {
      const product = {
        id: `${index + 1}`,  // Remove "product-" if your dynamic page expects only numbers
        name: productName,
        price: productPrices[index],
        image: `/products/product${index + 1}.png`,
      };

      return (
        <div key={product.id} className="product-card">
          <Link href={`/products/${product.id}`} className="block">
            <Image src={product.image} alt={product.name} width={315} height={315} />
          </Link>

          <div className="flex justify-between items-center mt-4">
            <div>
              <h3 className="font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm">${product.price}</p>
            </div>
            <button
              className="w-8 h-8 bg-gray-200 rounded-md hover:bg-blue-500 flex justify-center items-center"
              onClick={() => addToCart(product)}
            >
              <Image src="/Cart.png" alt="Add to Cart" width={16} height={16} />
            </button>
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* Top Categories */}
      <section className="section">
        <h2 className="section-title">Top Categories</h2>
        <div className="product-container">
          {productNames.slice(4, 7).map((productName, index) => {
            const product = {
              id: `${index + 1}`,
              name: productName,
              price: productPrices[index + 4],
              image: `/products/product${index + 5}.png`,
            };

            return (
              <div key={product.id} className="product-card relative">
                    <Link href={`/products/${product.id}`} className="block">
                <Image src={product.image} alt={product.name} width={305} height={305} />
                </Link>

              </div>
            );
          })}
        </div>
      </section>

      {/* Explore New and Popular Styles */}
      <section className="section">
        <div className="explore-container">
          <div className="flex items-center gap-4">
            <p className="explore-title">EXPLORE NEW AND POPULAR STYLES</p>
            <div className="text-center">
              <Image src="/products/10.jpg" alt="Main Product" width={450} height={450} className="explore-big-image" />
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="explore-small-container">
            <Image src="/products/product1.png" alt="Product 4" width={200} height={200} className="explore-small-image" />
            <Image src="/products/product2.png" alt="Product 1" width={200} height={200} className="explore-small-image" />
            <Image src="/products/product3.png" alt="Product 5" width={200} height={200} className="explore-small-image" />
            <Image src="/products/product4.png" alt="Product 2" width={200} height={200} className="explore-small-image" />
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="section">
        <h2 className="section-title">Our Products</h2>

        {/* First Row */}
        <div className="product-container">
          {productNames.slice(0, 4).map((productName, index) => {
            const product = {
              id: `${index + 1}`,
              name: productName,
              price: productPrices[index],
              image: `/products/product${index + 1}.png`,
            };

            return (
              <div key={product.id} className="product-card">
                  <Link href={`/products/${product.id}`} className="block">
                <Image src={product.image} alt={product.name} width={315} height={315} />
                </Link>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                  </div>
                  <button
                    className="w-8 h-8 bg-gray-200 rounded-md hover:bg-blue-500 flex justify-center items-center"
                    onClick={() => addToCart(product)}
                  >
                    <Image src="/Cart.png" alt="Add to Cart" width={16} height={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
