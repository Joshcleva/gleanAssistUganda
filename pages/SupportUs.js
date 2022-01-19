import React from "react";
import Head from "next/head";
import Link from "next/link";

const SupportUs = () => {
  return (
    <>
      <Head>
        <title>
          SupportUs - Glean Assist Through Paypal, Chipper Cash & Mobile Money
        </title>
        <meta
          name="description"
          content="Paypal - gleanassist@gmail.com | ChipperCash - @clarkrex | MobileMoney - 0772951826 | Please consider any gift you offer to us appreciatable"
        />
        <meta
          property="og:title"
          content=" Paypal - gleanassist@gmail.com | ChipperCash - @clarkrex | MobileMoney - 0772951826 | Please consider any gift you offer to us appreciatable"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="text-center mt-4  px-4 mb-4">
        <div className="w-full text-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-500 text-white px-8 py-3 rounded-lg mb-10">
          <div className="text-center text-lg mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-full text-white px-4 py-3 mx-10 ">
            <h1> Support Us</h1>
          </div>
          <div>
            <strong>
              Please consider any gift you offer to us appreciatable. You can
              support us through:{" "}
            </strong>
          </div>
        </div>
        <Link href="https://www.paypal.com/myaccount/transfer/homepage/buy/preview">
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-pink-500 rounded-full text-white px-4 py-1">
            <h3> PayPal </h3>
          </div>
        </Link>
        <p className="cursor-pointer">
          <Link href="https://www.paypal.com/myaccount/transfer/homepage/buy/preview">
            gleanassist@gmail.com
          </Link>
        </p>
        <Link href="https://chippercash.com">
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-green-500 rounded-full text-white px-4 py-1">
            <h3> ChipperCash</h3>
          </div>
        </Link>
        <p className="cursor-pointer">
          <Link href="https://chippercash.com">@clarkrex</Link>
        </p>
        <Link href="tel:*165*1*1*0772951826#">
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-500 rounded-full text-white px-4 py-1">
            <h3> Mobile Money </h3>
          </div>
        </Link>
        <p className="cursor-pointer">
          <Link href="tel:*165*1*1*0772951826#"> 0772951826 </Link>
        </p>
      </div>
    </>
  );
};
export default SupportUs;
