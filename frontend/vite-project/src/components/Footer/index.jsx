import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-600 rounded-tl-sm rounded-tr-sm h-20">
      <section className="flex  gap-1 flex-col justify-center items-center h-full md:flex-row md:gap-3">
        <a href="#" className="no-underline hover:underline">
          Link 1
        </a>
        <span className="hidden text-blue-100 md:block">|</span>
        <a href="#" className="no-underline  hover:underline">
          Link 2
        </a>
        <span className="hidden text-blue-100 md:block">|</span>
        <a href="#" className="no-underline   hover:underline">
          Link 3
        </a>
      </section>
    </footer>
  );
}
