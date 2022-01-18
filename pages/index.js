import React, { useState } from "react";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import Head from 'next/head';

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto px-10 mb-8 mt-8 justif">
      <meta name="google-site-verification" content="5_lX8sP53cRQKZDgoW_cr_DOfQ-Kfye3WSPUzmsWZKo" />
      <Head>
        <title>
          GleanAssist | Get assistance for all tech problems, data tricks, betting, make
          money and hacking Here
        </title>
        <meta
          name="description"
          content="Get all the latest tech solutions and hacks"
        />
        <meta property="og:title" content="All Tech solutions" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <FeaturedPosts />

      <div className="w-full pt-2 mt-4 relative mx-auto text-gray-600 mb-4 text-center">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search What You Want Here"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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

