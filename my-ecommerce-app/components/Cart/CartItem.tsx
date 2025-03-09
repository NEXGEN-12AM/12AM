"use client"; // Fix for Next.js Client Component Error

import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Blue Starry Star Hoodie",
      size: "S",
      price: 20,
      quantity: 1,
      imageUrl: "/Cart/Bob shirt.jpg",
    },
    {
      id: 2,
      name: "Black Oversized Hoodie",
      size: "S",
      price: 15,
      quantity: 1,
      imageUrl: "/Cart/Sharky.jpg",
    },
    {
      id: 3,
      name: "Creamy Bear Hoodie",
      size: "S",
      price: 18,
      quantity: 1,
      imageUrl: "/Cart/creamy.jpg",
    },
    {
      id: 4,
      name: "Navy Blue Crewneck Sweatshirt",
      size: "S",
      price: 25,
      quantity: 1,
      imageUrl: "/Cart/Game console.jpg",
    },
  ]);

  // Increase Quantity
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">CART</h1>

      {/* Cart Table */}
      <div className="w-full">
        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-6 text-gray-700 font-bold text-lg border-b pb-3">
          <span className="col-span-2">ITEM</span>
          <span className="text-center">QUANTITY</span>
          <span className="text-center ml-20">SUBTOTAL</span>
          <span className="text-right pr-4">REMOVE</span> {/* Align header to the right */}
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center py-6 border-b"
          >
            {/* Product (Image + Name) */}
            <div className="flex items-center space-x-6 col-span-2">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 bg-gray-300 rounded-lg shadow-md"
              />
              <div>
                <a href="#" className="text-xl font-semibold text-blue-600">
                  {item.name}
                </a>
                <p className="text-lg text-gray-500">Size: {item.size}</p>
                <p className="text-lg text-red-600 font-bold">${item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="border px-4 py-2 text-2xl rounded-md bg-gray-200 hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-xl font-bold w-12 text-center">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="border px-4 py-2 text-2xl rounded-md bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="text-xl font-bold text-center ml-20">${item.price * item.quantity}</div>

            {/* Remove Button - Now Aligned Right */}
            <div className="flex justify-end w-full pr-10"> {/* Push it to the end */}
              <button onClick={() => removeItem(item.id)}>
                <img
                  src="/Cart/Trash.png"
                  alt="Remove"
                  className="w-6 h-6 cursor-pointer hover:opacity-75"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-10">
        <button className="px-8 py-3 border border-gray-600 text-gray-800 text-lg rounded-lg">
          CONTINUE SHOPPING
        </button>
        <button className="px-8 py-3 bg-black text-white text-lg rounded-lg">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
