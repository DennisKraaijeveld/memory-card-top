import React from 'react';

const singleCard = ({ handleRound, ...props }) => {
  let { id, title, imageSrc } = props;

  return (
    <div
      onClick={() => handleRound(id)}
      className="relative w-full pt-6 text-white transition-all duration-300 rounded-md shadow-lg cursor-pointer bg-slate-300 hover:-translate-y-1"
    >
      <div className="flex flex-col justify-center w-full ">
        <h2 className="text-lg font-semibold text-center text-slate-600">
          {title}
        </h2>
        <div className="relative">
          <img src={imageSrc} alt="" className="bottom-0 mt-2 rounded-b-md" />
        </div>
      </div>
    </div>
  );
};

export default singleCard;
