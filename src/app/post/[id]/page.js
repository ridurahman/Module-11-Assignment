import React from "react";
import blogData from "@/data/blogData.json";

const page = ({ params }) => {
  const singlePost = blogData.find((item) => item.id == params.id);
  return (
    <div className="p-5 m-5 mx-40 ">
      {/* <h1 className="text-center">Post: {params.id}</h1> */}
      <h1 className="text-center text-3xl font-semibold">{singlePost.title}</h1>
      <p className="text-center font-semibold">{singlePost.date}</p>
      <img className="mx-auto m-5" src={singlePost.image} />
      <p className="text-justify">{singlePost.content}</p> <br />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: "" + post.id,
  }));
}
