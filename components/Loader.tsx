import React from "react";

interface LoaderProps {
  loading?: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 h-[5px] bg-gray-300">
        <div className="loading-indicator bg-purple-500 absolute h-[5px] w-[40vw] left-[-100vw]"></div>
      </div>
    );
  }

  return null;
};

export default Loader;
