"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Customize() {
  const [size, setSize] = useState("S");
  const [frontDesign, setFrontDesign] = useState(null);
  const [backDesign, setBackDesign] = useState(null);

  const handleUpload = (e, setDesign) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDesign(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 mt-20">
      <h1 className="text-3xl font-bold mb-6">CUSTOMIZE YOUR SHIRT</h1>

      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* Shirt Preview */}
        <div className="flex flex-col items-center w-full md:w-1/2 bg-gray-200 p-6 rounded-lg">
          <div className="relative w-[320px] h-[450px]">
            
            {frontDesign && (
              <Image src={frontDesign} alt="Front Design" layout="fill" objectFit="contain" className="absolute top-0 left-0" />
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-lg"
          >
            DOWNLOAD
          </motion.button>
        </div>

        {/* Customize Options */}
        <div className="w-full md:w-1/2 p-6">
        <h2 className="text-lg font-bold mb-2">TYPE</h2>
            <div className="flex space-x-4">
              <button className="border p-2 rounded-md hover:scale-105 transition">
                <Image src="/type1.jpg" alt="Sweater" width={100} height={100} />
              </button>
            </div>
        
          <h2 className="text-xl font-semibold mb-4 mt-6">SIZE :</h2>
          <div className="flex space-x-4 mb-6">
            {["S", "M", "L"].map((s) => (
              <button
                key={s}
                className={`px-4 py-2 border rounded-lg ${size === s ? "bg-black text-white" : "border-gray-400"}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">UPLOAD DESIGN :</h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center border-2 border-gray-400 rounded-lg p-4 cursor-pointer">
              <p>FRONT DESIGN</p>
              <input type="file" onChange={(e) => handleUpload(e, setFrontDesign)} className="hidden" id="front-upload" />
              <label htmlFor="front-upload" className="text-3xl">+</label>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-400 rounded-lg p-4 cursor-pointer">
              <p>BACK DESIGN</p>
              <input type="file" onChange={(e) => handleUpload(e, setBackDesign)} className="hidden" id="back-upload" />
              <label htmlFor="back-upload" className="text-3xl">+</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
