"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, image: "/shop/card1.png", price: "$14.99" },
  { id: 2, image: "/shop/card1.png", price: "$19.99" },
  { id: 3, image: "/shop/card1.png", price: "$24.99" },
];

const Collection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextProduct = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-container w-full min-h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-center font-humane text-[48px] md:text-[72px] lg:text-[86px] font-normal text-black tracking-[3.31px] my-8">
        NEW ARRIVAL
      </h2>

      {/* Product Selection Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Button */}
        <button
          className="absolute left-4 z-20 px-4 py-2 bg-black text-white rounded-full"
          onClick={prevProduct}
        >
          ◀
        </button>

        {/* Card Container */}
        <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
          <AnimatePresence>
            {products.map((product, index) => {
              const position =
                (index - selectedIndex + products.length) % products.length;

              let scale = 1;
              let zIndex = 1;
              let opacity = 1;
              let xOffset = 0;

              if (position === 0) {
                scale = 1.2; // Center card is bigger
                zIndex = 10;
              } else if (position === 1 || position === products.length - 1) {
                scale = 0.9; // Side cards are smaller
                zIndex = 5;
                opacity = 0.6;
                xOffset = position === 1 ? 120 : -120; // Left & Right Offset
              }

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity,
                    scale,
                    x: xOffset,
                    zIndex,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute flex flex-col items-center"
                >
                  <Image
                    src={product.image}
                    alt="Product Image"
                    width={300}
                    height={400}
                    className="rounded-lg "
                  />
                  <div className="mt-4 text-xl font-bold">{product.price}</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-4 z-20 px-4 py-2 bg-black text-white rounded-full"
          onClick={nextProduct}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Collection;
