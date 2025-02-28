import Head from 'next/head';
import Navbar from './NavBar/Navbar';
import HeroSection from './Hero/Hero';


export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>12AM | Home</title>
        <meta name="description" content="Welcome to 12AM - Night vibes and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        {/* <HeroSection /> */}
      </main>
    </div>
  );
}
