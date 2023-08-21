import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold m-2">Welcome to our Blog</h1>
      <Link
        href="/blog"
        className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-2"
      >
        Go To Blog Page
      </Link>
    </div>
  );
};

export default page;
