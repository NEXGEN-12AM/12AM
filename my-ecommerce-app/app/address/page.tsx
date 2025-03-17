"use client"; // Required for Client Component

import AddressManager from "@/components/Address/Address";
import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="flex text-2xl font-bold mb-7 mt-20 center">Manage Addresses</h1>

      {/* Address Manager Component */}
      <AddressManager />

      {/* Back to Home Button */}
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
