import React, { useState } from "react";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 mt-8 justif">
      <Head>
        <title>
          GleanAssist | Get assistance for all tech problems, make money & All how to's Here
        </title>
        <meta
          name="description"
          content="Get All the help you need on how to's | free internet & unlimited hacks | learning videos | tutorials | gaming | betting Here"
        />
        <meta property="og:title" content="All Tech solutions" />
        <meta
          name="google-site-verification"
          content="5_lX8sP53cRQKZDgoW_cr_DOfQ-Kfye3WSPUzmsWZKo"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <FeaturedPosts />
      <div className="flex justify-center">
        <Link href="/SearchGleanAssist">
          <div className="flex pt-2 mt-4 relative mx-auto text-gray-600 mb-4 text-center">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Get    Search Any Thing"
            />
            <img
              className="cursor-pointer absolute left-4 top-3 align-center text-center"
              height="20 px"
              width="30 px"
              src="/search2.gif"
              alt="Search"
            />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
