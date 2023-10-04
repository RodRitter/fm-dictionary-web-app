import React from "react";

interface NotFoundProps {
  result: any;
}

const NotFound = ({ result }: NotFoundProps) => {
  console.log(result);
  return (
    <div className="flex flex-col items-center text-center gap-[1em] mt-[116px]">
      <div className="text-[64px] mb-[-16px]">😕</div>
      <h4 className="font-bold m-0">{result?.title}</h4>
      <p className="text-gray-500">
        {result?.message} {result?.resolution}
      </p>
    </div>
  );
};

export default NotFound;
