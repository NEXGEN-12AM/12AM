import Head from "next/head";
import Navbar from "./NavBar/Navbar";
import HeroSection from "./Hero/Hero";
import Address from "@/components/Address/Address";
import EditProfile from "@/components/Profile/Profile";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>12AM | Home</title>
        <meta name="description" content="Welcome to 12AM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <div className="container mx-auto p-4">
        <HeroSection />
        </div>
      </main>
      <Address/>
      <EditProfile/>

    </>
  );
}
