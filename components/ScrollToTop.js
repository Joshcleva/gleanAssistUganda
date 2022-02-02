import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const [showScrollToTop, setScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setScrollToTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollWrap>
      {showScrollToTop && (
        <div onClick={scrollToTop}>
          <ScrollButton>
            <img src="/up.svg" alt="Up-button" />
          </ScrollButton>
        </div>
      )}
    </ScrollWrap>
  );
};

export default ScrollToTopButton;

const ScrollWrap = styled.div`
  position: fixed;
  diplay: relative;
  bottom: 1rem;
  right: 0rem;
`

const ScrollButton = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--card-background-color);
  box-shadow: -5px -5px 15px var(--card-shadow-color-top-left), 5px 5px 15px var(--card-shadow-color-bottom-right);
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  animation: fadeIn 0.5s;
  transition: 0.4s;
`

// @keyframes fadeIn {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
