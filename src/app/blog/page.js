import React from "react";
import blogData from "@/data/blogData.json";
import Link from "next/link";

async function getData() {
  if (!blogData) {
    throw new Error("Failed to load data");
  }
  return blogData;
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="text-3xl font-bold m-2">Our Blogs</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          // <div key={index}>
          //   <Link href={`/post/${item.id}`} className="text-xl font-semibold">
          //     {item.title}
          //   </Link>
          //   <p className="font-semibold">{item.date}</p>
          //   <img src={item.image} width="300px" />
          //   <p className="text-justify">{item.content}</p> <br />
          // </div>
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Link href={`/post/${item.id}`}>
              <img
                className="w-full"
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 font-bold text-xl mb-2">
                {item.title}
              </div>
            </Link>
            <div className="px-6 ">
              <div className="font-bold text-base mb-2">{item.date}</div>
              <p className="text-gray-700 text-base">{item.short_desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
