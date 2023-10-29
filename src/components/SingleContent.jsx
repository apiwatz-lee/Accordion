import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <article className="mt-5">
      <header className="flex border rounded-md justify-between items-center h-[50px] px-10 bg-gray-200 shadow-current">
        <h4>{title}</h4>
        <button
          className="border border-black rounded-full bg-white p-1 cursor-pointer"
          onClick={() => setShowContent(!showContent)}
        >
          {showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div className="px-10 mt-3">{showContent && <p>{description}</p>}</div>
    </article>
  );
};

export default SingleContent;
