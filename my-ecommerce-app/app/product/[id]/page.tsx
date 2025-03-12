"use client";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/NavBar/Navbar";

const products = [
  { id: 1, image: "/shop/card1.png", detailImage: "/shop/detail1.png", name: "Mercury Long Sleeve Sweatshirt", price: "14.99$", stock: 10, type: "Sweatshirt" },
  { id: 2, image: "/shop/card2.png", detailImage: "/shop/detail2.png", name: "Black Hoodie", price: "19.99$", stock: 8, type: "Hoodie" },
  { id: 3, image: "/shop/card3.png", detailImage: "/shop/detail3.png", name: "Gray Oversized Sweatshirt", price: "24.99$", stock: 5, type: "Sweatshirt" },
  { id: 4, image: "/shop/card4.png", detailImage: "/shop/detail4.png", name: "Streetwear Hoodie", price: "29.99$", stock: 3, type: "Hoodie" },
  { id: 5, image: "/shop/card5.png", detailImage: "/shop/detail5.png", name: "Minimalist Sweatshirt", price: "34.99$", stock: 7, type: "Sweatshirt" },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const imageRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return <div className="text-center text-2xl font-bold">Product Not Found</div>;
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Product Page Content */}
      <div className="container mx-auto px-6 py-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Side - Product Image with Zoom */}
          <div className="relative flex flex-col items-center bg-gray-100 pt-6 pr-5 rounded-lg shadow-md max-w-[400px] mx-auto">
            <div
              className="relative"
              ref={imageRef}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={product.detailImage}
                alt={product.name}
                width={400}
                height={500}
                className="rounded-lg"
              />

              {/* Zoom Box - Increased Zoom Effect */}
              {isZoomed && (
                <div
                  className="absolute w-40 h-40 border-2 border-gray-400 shadow-lg bg-white pointer-events-none"
                  style={{
                    top: `${zoomPosition.y}%`,
                    left: `${zoomPosition.x}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundImage: `url(${product.detailImage})`,
                    backgroundSize: "400%", // Increased Zoom Level
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              )}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col font-kano">
            <h1 className="text-4xl font-normal font-kano">{product.name}</h1>
            <p className="text-3xl font-semibold text-gray-700 mt-2">{product.price}</p>
            <p className=" text-xl text-gray-500 mt-2">Type: {product.type}</p>
            <p className="font-Kano text-xl text-gray-500">Stock: {product.stock} Left</p>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">SIZE:</h3>
              <div className="flex space-x-4 mt-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`w-14 h-10 flex items-center justify-center text-sm font-bold border-2 rounded-full transition ${
                      selectedSize === size ? "bg-black text-white" : "border-black text-black bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">QTY:</h3>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 bg-gray-200 rounded-md text-lg "
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition">
                BUY
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white text-lg rounded-md hover:bg-gray-900 transition">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
