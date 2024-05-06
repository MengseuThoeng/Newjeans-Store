import Image from "next/image";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "This is Product page store bro",
  keywords: ["shop", "anime", "shopping", "store"],
};
const page = () => {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24">
      <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        <img
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          src="https://media.pitchfork.com/photos/64af1fe75185b039bca7cf77/1:1/w_1400,h_1400,c_limit/NewJeans%20-%20Get%20Up.jpeg"
        />

        <article className="relative p-6 md:p-8 md:col-span-2">
          <svg
            className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor"
              stroke-width="8"
            ></path>
          </svg>

          <div className="space-y-8">
            <p className="text-base sm:leading-relaxed md:text-2xl">
              At Newjeans Store, we&apos;re more than just an online
              marketplace. We&apos;re a community of passionate individuals
              dedicated to providing you with the best shopping experience
              possible. With a diverse range of products and a commitment to
              quality, we strive to be your go-to destination for all your
              shopping needs
            </p>

            <footer className="flex items-center space-x-4 md:space-x-0">
              <img
                className="w-12 h-12 rounded-full md:hidden"
                src="https://randomuser.me/api/portraits/men/68.jpg"
              />
              <span className="font-bold text-lg">Newjeans</span>
            </footer>
          </div>
        </article>
      </blockquote>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default page;
