import React from "react";

const RerollIconAOS = ({ func }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      style={{
        position: "absolute",
        right: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={() => func()}
    >
      <path
        fill='#006CBF'
        fill-rule='evenodd'
        d='M2 8.99993c0 .552-.447 1-1 1-.553 0-1-.448-1-1v-2c0-2.757 2.243-5 5-5h9V.499925c0-.194.112-.371.288-.4529996.176-.082.384-.05500001.532.0689996l3 2.500005c.115.095.18.236.18.384 0 .148-.065.289-.18.384l-3 2.5c-.091.076-.205.116-.32.116-.072 0-.145-.016-.212-.047-.176-.082-.288-.259-.288-.453v-1.5H5c-1.654 0-3 1.346-3 3v2zm14 0c0-.552.447-1 1-1 .553 0 1 .448 1 1v1.99997c0 2.757-2.243 5-5 5H4v1.5c0 .194-.112.371-.288.453-.067.031-.14.047-.212.047-.115 0-.229-.04-.32-.116l-3-2.5c-.115-.095-.18-.236-.18-.384 0-.148.065-.289.18-.384l3-2.5c.149-.124.357-.151.532-.069.176.082.288.259.288.453v1.5h9c1.654 0 3-1.346 3-3V8.99993z'
        clip-rule='evenodd'
      />
    </svg>
  );
};

export default RerollIconAOS;
