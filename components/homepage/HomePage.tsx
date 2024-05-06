import React from "react";
import CountUp from "react-countup";

import ProductCard from "@/app/(user)/product/page";

export default function HomePage() {
  return (
    <div>
      <main>
        <div>
          <div className="flex pt-12 px-6 md:px-20  items-center justify-center  md:h-screen overflow-hidden">
            <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
              <div className="w-full md:w-1/2 lg:pr-32">
                <h2 className="text-4xl lg:text-5xl text-center md:text-left text-gray-800 leading-tight font-medium">
                  There a better way to order our products.
                </h2>
                <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                  Introducing our enhanced product sorting feature! Navigate
                  effortlessly through categories, brands, and specifications
                  tailored to your preferences. Say goodbye to endless scrolling
                  with intuitive filters by price, popularity, and more. Elevate
                  your shopping experience today!
                </h3>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/20230921_Newjeans_Hanni_%ED%8B%B0%EB%B9%84%ED%85%90_01_%28cropped%29.jpg/1200px-20230921_Newjeans_Hanni_%ED%8B%B0%EB%B9%84%ED%85%90_01_%28cropped%29.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-12 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8 flex justify-center">
              <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20"></p>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                Newjeans Shopping
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Navigate through our extensive collection effortlessly as you
                explore various categories, brands, and specifications tailored
                to your preferences. Whether you're hunting for the latest
                trends, searching for specific features, or simply browsing for
                inspiration, our advanced sorting options ensure you'll discover
                products that align perfectly with your needs and desires.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/about"
                  className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  About Us
                </a>
                <a
                  href="/policy"
                  className="text-sm font-semibold leading-6 text-gray-800"
                >
                  Learn more about our policy
                  <span>→</span>
                </a>
              </div>
            </div>
            <div className="mt-10 flow-root sm:mt-20">
              <div className="-m-2 rounded-xl bg-gray-100 p-2 ring-1 ring-inset ring-gray-200/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://staticg.sportskeeda.com/editor/2023/08/ef8e3-16911506998714-1920.jpg"
                  width="2432"
                  height="1442"
                  className="rounded-md shadow-2xl ring-1 ring-gray-200/10"
                />
              </div>
            </div>
          </div>
        </div>
        {/* BA */}
        <div className="relative h-screen w-full">
          <img
            src="https://6.soompi.io/wp-content/uploads/image/87e1f5a945664e86ab42fb54ca5538c5/dummy.jpeg?s=900x600&e=t"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white font-bold">Meet our BA</h1>
            <p className="text-xl text-white mt-4">
              Immerse yourself in the captivating world of our Business Analyst
              (BA)
            </p>
          </div>
        </div>
      </main>
      
      <ProductCard />
    </div>
  );
}
