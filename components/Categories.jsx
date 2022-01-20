import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div
      className=" shadow-lg rounded-lg p-8 pb-12 mb-8 mt-8 "
      style={{
        backgroundImage:
          "url(https://www.itl.cat/pngfile/big/157-1572257_professional-website-background-images-hd-professional-emails-background.jpg)",
      }}
    >
      <h2 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h2>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
