import Head from "next/head";
import Navbar from "./NavBar/Navbar";
import HeroSection from "./Hero/Hero";
import Collection from "@/components/Collection/Collection";
import Item from "@/components/Items/items";
import LoginPage from "./login/page";
import Link from "next/link";

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
  
  {/* Remove Default Spacing */}
  <div className="w-full">
    <HeroSection />
  </div>

  {/* Content Wrapper with Proper Spacing */}
  <div className="container mx-auto px-4">
    <Collection />
    <Item />
  </div>

        <div><LoginPage/></div>


        {/* Button to navigate to the Address Page */}
        <div className="mt-6">
          <Link href="/address">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
              Manage Addresses
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
