import Head from "next/head";
import Navbar from "./NavBar/Navbar";
import HeroSection from "./Hero/Hero";
import Collection from "@/components/Collection/Collection";
import Item from "@/components/Items/items";
import Address from "@/components/Address/Address";
import Cart from "@/components/Cart/CartItem";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>12AM | Home</title>
        <meta name="description" content="Welcome to 12AM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Main Layout Wrapper */}
      <main className="relative w-full flex flex-col items-center">
        {/* Content Wrapper with Spacing */}
        <div className="container mx-auto p-4 space-y-32 relative z-10">
          <HeroSection />
          <Collection />
          <Item />
        </div>

        {/* Address Section with Background Layering Fixed */}
        <div className="relative w-full z-20 bg-white">
          <Address />
        </div>
      </main>
    </>
  );
}
