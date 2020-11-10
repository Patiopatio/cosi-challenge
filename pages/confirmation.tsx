import React from "react";
import Link from "next/link";

export default ({ test }) => {
  return (
    <main className="container m-auto h-full px-4 md:px-16 w-full md:w-1/2 bg-blue-100">
      <section className="flex flex-col h-screen justify-center">
        <img
          src="/images/plane.gif"
          alt="description of gif"
          className="flex self-center w-64 h-64 mb-8 rounded-full overflow-hidden shadow-2xl"
        />
        <h1 className="mb-4 text-xl md:text-2xl">
          🎉 Your check-in is confirmed.
        </h1>
        <a href="https://www.cosi-group.com/en" className="text-gray-700">
          🏠 Accommodation needed? <br />
          <span className="text-sm underline">
            Checkout cozy accommodation in the comfort of a private home
          </span>
        </a>
      </section>
    </main>
  );
};
