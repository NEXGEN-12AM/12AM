import Image from "next/image";

const Item: React.FC = () => {
  return (
    <div className="main-container max-w-[1920px] w-full h-auto mx-auto my-20">
      {/* SHOP Title */}
      <h2 className="flex justify-center font-humane text-[48px] md:text-[72px] lg:text-[86px] font-normal text-black tracking-[3.31px] m-6">
        SHOP
      </h2>

      {/* Grid Container - Ensures Items are Evenly Spread */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Item 1 */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>

        {/* Item 2 */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>

        {/* Item 3 */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>

        {/* Item 4 - Just Add More as Needed */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>

        {/* Item 5 */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>

        {/* Item 6 */}
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[400px] h-[550px] bg-[url('/shop/item-1.png')] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
