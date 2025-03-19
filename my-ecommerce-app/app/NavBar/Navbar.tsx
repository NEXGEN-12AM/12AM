"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { supabase } from "@/lib/supabase"; // ✅ Import Supabase Client
import { motion,} from "framer-motion";


export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState<null | { id: string; email: string }>(null);
  const [userProfile, setUserProfile] = useState({ firstName: "", lastName: "" });
  const [isContactOpen, setIsContactOpen] = useState(false); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log("Fetching user...");
      
      // ✅ Get the authenticated user
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }
  
      const authUser = data?.user;
      if (!authUser) {
        console.log("No authenticated user found");
        return;
      }
  
      console.log("User ID from Supabase:", authUser.id);
      setUser({ id: authUser.id, email: authUser.email });
  
      // ✅ Fetch user profile from `profiles` table
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("first_name, last_name")
        .eq("id", authUser.id)
        .single();
  
      if (profileError) {
        console.error("Error fetching profile:", profileError);
      } else {
        console.log("Fetched profile:", profile);
        setUserProfile({
          firstName: profile?.first_name || "Unknown",
          lastName: profile?.last_name || "User",
        });
      }
    };
  
    fetchUserProfile(); // ✅ Call the function when the component mounts
  }, []); // ✅ Run once when the component mounts
  
  const handleLoginRedirect = () => {
    router.push("/login");
    router.refresh(); // 🔥 Ensures Next.js reloads the page properly
  };
  
  
  
  // ✅ Handle Logout Function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUserProfile({ firstName: "", lastName: "" });
    router.push("/login"); // ✅ Redirect to login after logout
  };


  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="main-container fixed top-0 left-0 w-full h-[56px] z-[50]">
      {/* Black Section */}
      <div className="absolute top-0 left-0 w-full h-[30px] bg-black"></div>
      <div 
  className="main-container w-[185px] h-[83px] bg-cover bg-no-repeat relative mx-auto my-[-14]"
  style={{ backgroundImage: "url('https://static.codia.ai/image/2025-03-03/e0db1a94-9580-4d4c-a132-15357d2be074.svg')" }}
>

        {/* Transparent Section */}
        <div className="absolute top-0 left-0 w-full h-[20px] bg-transparent"></div>
      </div>

      {/* Left Menu Icon (Opens Sidebar) */}
      <div 
        className="w-[56px] h-[56px] bg-[#000] rounded-[38.22px] absolute top-[3px] left-[16px] flex justify-center items-center z-[9] cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <img 
          src="/menu.png" 
          alt="Menu Icon" 
          className="w-[32px] h-[32px] object-cover relative z-10"
        />
      </div>

      {/* Right Profile Icon */}
      <div className="w-[56px] h-[56px] absolute top-[4px] right-[16px] z-[11] flex justify-center items-center">
        <img
          src="/profile.png"
          alt="Profile Icon"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setIsProfileOpen(true)}
        />
      </div>


      {/* Center Logo */}
      <Image 
        src="/logo.png"
        alt="12AM Logo"
        width={120} 
        height={40} 
        className="absolute left-1/2 transform -translate-x-1/2 top-[5px] ml-1 z-[12]"
      />
    {/* Profile Popup */}
     {/* Profile Popup */}
     {isProfileOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }}
            ref={profileRef}
            className="w-[460px] h-[380px] bg-cover bg-center shadow-lg rounded-lg p-6 relative flex flex-col "
            style={{ backgroundImage: "url('/icon/pfcard.png')" }}
          >
            {/* Close Button */}
            <button onClick={() => setIsProfileOpen(false)} className="absolute top-2 right-4 text-white text-2xl">
              &times;
            </button>

            {/* ✅ Show User Profile if Logged In */}
            {/* ✅ If user is logged in, show profile details */}
            {user ? (
  <div className="flex flex-col items-center">
  <Image src="/profile-image.png" alt="Profile" width={100} height={120} className="rounded-md border-2 border-gray-500 p-1 mt-12" />
  <div className="mt-8 text-black text-lg font-bold">
    <p>NAME: <span className="font-normal">{userProfile.firstName} {userProfile.lastName}</span></p>
    <p>EMAIL: <span className="font-normal">{user.email}</span></p>
  </div>
    <div className="flex justify-center pt-6 space-x-6">
    <button
  onClick={() => router.push("/profile/edit")} // ✅ Redirect to edit page
  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
>
  EDIT
</button>
<button 
  onClick={async () => {
    await handleLogout();  // ✅ Call logout function
    router.push("/");       // ✅ Redirect to home page after logout
  }} 
  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
>
  LOG OUT
</button>

    </div>
  </div>
) : (
  /* If User is Not Logged In */
  <div className="flex flex-col items-center text-black mt-12">
    <h2 className="text-2xl font-bold mt-12">Welcome!</h2>
    <p className="mt-2 text-lg">Sign in to your account</p>
    <div className="mt-12 flex space-x-4">
    {/* Login Button */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }} 
  animate={{ opacity: 1, scale: 1 }}   
  transition={{ duration: 0.4, ease: "easeOut" }} 
  whileHover={{ scale: 1.1 }} // 🔥 Slight scale-up on hover
  whileTap={{ scale: 0.95 }} // 🔥 Button tap effect
>
  <button 
    onClick={handleLoginRedirect}  
    className="px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all
    bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg 
    hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
  >
    LOGIN
  </button>
</motion.div>

{/* Register Button */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }} 
  animate={{ opacity: 1, scale: 1 }}   
  transition={{ duration: 0.4, ease: "easeOut" }} 
  whileHover={{ scale: 1.1 }} // 🔥 Slight scale-up on hover
  whileTap={{ scale: 0.95 }} // 🔥 Button tap effect
>
  <button 
    onClick={() => router.push("/signup")} 
    className="px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all
    bg-gradient-to-r from-gray-900 to-black shadow-lg 
    hover:from-gray-700 hover:to-gray-900 hover:shadow-xl"
  >
    REGISTER
  </button>
</motion.div>

    </div>
  </div>
)}
          </motion.div>
        </div>
      )}
      
      {/* Burger Menu (Sidebar) */}
      <div ref={menuRef} className={`fixed top-0 left-0 h-full w-[260px] bg-black text-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} z-[100] shadow-lg`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-normal tracking-[2px] ">TE HENGLAY</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl">&times;</button>
          </div>
          <p className="text-xl text-gray-400">010328281</p>
        </div>
        <hr className="border-gray-700" />

        <div className="p-6 font-kano">
          <h3 className="text-md font-kano font-bold mb-10">MY ACCOUNT</h3>
          <ul className="space-y-10">
  {[
    { name: "ADDRESS", href: "/address" },
    { name: "YOUR ORDER", href: "/orders" },
    { name: "WISH LIST", href: "/wishlist" },
    { name: "HISTORY", href: "/history" },
  ].map((item, index) => (
    <li key={index} className="relative group">
      <Link 
        href={item.href} 
        className="block hover:text-gray-300 text-lg font-bold tracking-widest relative overflow-hidden"
      >
        {item.name}

        {/* Glitch Effect */}
        <span className="absolute top-0 left-0 w-full h-full text-gray-300 opacity-0 group-hover:opacity-100 group-hover:animate-glitch">
          {item.name}
        </span>
      </Link>
    </li>
  ))}
</ul>
        </div>

        <hr className="border-gray-700" />

        <div className="p-6">
          <h3 className="text-md font-bold mb-4">SETTING</h3>
          <button className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">
            LOGOUT
          </button>
          
        </div>
        <div className="mt-16 flex justify-center">
    <Image 
      src="/twelve11.png"  // ✅ Change this to your actual image path
      alt="Additional Image"
      width={150}  // ✅ Adjust size as needed
      height={100} 
      className="rounded-md"
    />
  </div>
      </div>

      {/* Navigation Container */}
      <div className="font-bronx w-full h-[40px] flex justify-center items-center absolute top-7 left-0">
        <div className="w-full max-w-6xl flex justify-between items-center px-4">
          
          {/* Left Links */}
          <div className="flex space-x-32">
            <Link href="/" passHref>
              <span className="text-[22.75px] font-normal text-black p-2 cursor-pointer relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/#shop-section" passHref scroll={false}>
  <span className="text-[22.75px] font-normal text-black p-2 cursor-pointer relative group">
    SHOP
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
  </span>
</Link>
          </div>
          
          {/* Right Links */}
          <div className="flex space-x-32">
          <span
              className="text-[22.75px] font-normal text-black cursor-pointer relative group"
              onClick={() => setIsContactOpen(true)} // ✅ Open modal
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 mt-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>

            <Link href="/cart">
              <span className="text-[22.75px] font-normal p-2 text-black cursor-pointer relative group">
                CART
                <span className="absolute bottom-0 left-0 w-0 h-0.5 mt-4 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {isContactOpen && (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]"
    initial={{ opacity: 0 }} // 🔥 Fade In Effect
    animate={{ opacity: 1 }} // 🔥 Fully Visible
    exit={{ opacity: 0 }} // 🔥 Fade Out on Close
    transition={{ duration: 0.3 }} // Smooth Transition
    onClick={() => setIsContactOpen(false)} // ✅ Click outside to close modal
  >
    {/* Modal Content - Stops Click Propagation */}
    <motion.div
      className="bg-white rounded-lg shadow-lg w-[600px] relative"
      initial={{ y: -50, opacity: 0 }} // 🔥 Slide Down Animation
      animate={{ y: 0, opacity: 1 }} // 🔥 Appear Normally
      exit={{ y: -50, opacity: 0 }} // 🔥 Slide Up on Close
      transition={{ type: "spring", stiffness: 100 }} // Smooth Bounce
      onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
    >
      {/* Full-Width Black Header */}
      <motion.div
        className="w-full bg-black text-white text-center py-3 text-2xl font-bold rounded-t-lg"
        initial={{ scaleX: 0 }} // 🔥 Expanding Effect
        animate={{ scaleX: 1 }} // 🔥 Full Width
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        CONTACT
      </motion.div>

      {/* QR Code Section with Divider */}
      <div className="flex items-center justify-center space-x-6 py-6">
        
        {/* Facebook QR Code */}
        <motion.div
          className="flex flex-col items-center pr-10 pl-10"
          initial={{ opacity: 0, x: -30 }} // 🔥 Left Slide In
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="font-semibold mb-2">FACEBOOK</p>
          <Image src="/facebook.jpeg" alt="Facebook QR" width={180} height={120} />
        </motion.div>

        {/* Vertical Divider Line */}
        <div className="w-[1px] h-[150px] bg-gray-400"></div>

        {/* Telegram QR Code */}
        <motion.div
          className="flex flex-col items-center pl-10 pr-10"
          initial={{ opacity: 0, x: 30 }} // 🔥 Right Slide In
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="font-semibold mb-2">TELEGRAM</p>
          <Image src="/telegram.jpg" alt="Telegram QR" width={180} height={120} />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
)}




    </div>
  );
}


