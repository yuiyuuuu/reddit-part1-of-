import React from "react";

const NoCommentSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      style={{
        height: "28px",
        width: "28px",
        marginBottom: "20px",
        fill: "rgba(0,121,211,0.4)",
      }}
    >
      <path d='M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z'></path>
      <path d='M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z'></path>
    </svg>
  );
};

export default NoCommentSvg;
