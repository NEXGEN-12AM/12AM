import Head from "next/head";
import Navbar from "./NavBar/Navbar";
import HeroSection from "./Hero/Hero";
import Collection from "@/components/Collection/Collection";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>12AM | Home</title>
        <meta name="description" content="Welcome to 12AM - Night vibes and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <main className="container mx-auto p-4">
        <HeroSection />
        <Collection />
        </main>
      </main>
    </>
  );
}
