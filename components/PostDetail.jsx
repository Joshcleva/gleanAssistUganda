import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import ReactPlayer from 'react-player';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}/>
        <meta property="og:post" content="Get All the help you need on how to's | data trick & unlimited hacks | learning videos | tutorials | gaming | betting Here"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="shadow-lg rounded-lg lg:p-8 pb-4 mt-8 bg-gray-300 w-full">
          <div className="items-center mb-2 w-full">
            <div className="items-center justify-center lg:mb-0">
              <div style={{ position: "relative", padding: "56.25%" }}>
                  <ReactPlayer
                    style={{
                      position: "absolute",
                      top: "10px",
                  left: "-2px",
                      padding: "5px"
                    }}
                    url={`${post.player}`}
                    width="90%"
                    height="90%"
                    controls={true}
                  />
              </div>
                 <div className="justify-center text-center lg:mt-">
                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                    Download Video
                  </span>
                </div>
                <iframe
                  className=" font-medium justify-center "
                  src={`https://ytmp4.buzz/api/button/videos/${post.downloadable}`}
                  width="100%"
                  allowtransparency="true"
                  scrolling="no"
                  style={{
                    border: "none",
                    height: "auto",
                  }}
                ></iframe>
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
    </>
  );
};

export default PostDetail;
