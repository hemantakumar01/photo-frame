import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center px-4 md:py-24 py-4 lg:px-20">
        <span className="mb-3 text-white bg-blue-900 badge">Best Frame</span>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
          Great your custum frames i one place
        </h1>
        <form className="w-full mb-6">
          <label className="sr-only">Your Email</label>
          <div className="block lg:hidden">
            <input
              className="text-blue-900 form-input form-input-lg"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              className="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
              type="submit"
            >
              Get Started
            </button>
          </div>
          <div className="hidden w-full form-append lg:flex">
            <input
              className="text-blue-900 form-input form-input-lg"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              className="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </form>
        <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </p>
      </div>
      <div>
        <img
          src="https://cdn.printshoppy.com/image/catalog/v6/webp/desktop-stands/v2/wooden-desktop-stands/category-wooden-banner-d.webp"
          alt="3 women looking at a laptop"
          className="object-cover w-full h-64 bg-gray-100 md:h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
