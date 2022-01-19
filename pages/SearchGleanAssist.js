import React, { useState } from "react";
import { PostCard } from "../components";
import { getPosts } from "../services";

import Head from "next/head";

const SearchSda = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto px-10 mb-8 text-center">
      <Head>
        <title>SdaMissionUg | Search Any Sda Music | Preachings</title>
        <meta
          name="description"
          content="Download all kinds of Sda Music Here"
        />
        <meta
          property="og:title"
          content="Top Sda songs 2022, Best  Sda choirs 2022, Sda Accapella 2022, Pathfinder songs 2022, Best Sda Hymn songs"
        />
        <link rel="icon" href="/images/sdalogo.png" />
      </Head>

      <div className="w-full pt-2 mt-4 relative mx-auto text-gray-600">
        <input
          className="border-2 md:w-auto w-full sm:w-auto w-full lg:w-auto w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-lg focus:outline-none"
          type="search"
          name="search"
          placeholder="Search Any Thing You Want Here"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="text-center grid grid-cols-1 lg:grid-cols-6 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts
            .filter((post) => {
              if (searchTerm == "") {
                return post;
              } else if (
                post.node.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSda;

// Fetch data at build time
export async function getStaticProps() {
  const posts = await (getPosts()) || [];

  return {
    props: { posts },
  };
}
