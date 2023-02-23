
  const Loading = () => {
    return (
        <div className="flex flex-col mb-6 ml-0 p-4 border-2 border-grey-900 border-solid rounded w-full md:w-80 md:m-4 animate-pulse">
        <div className="flex justify-between align-middle mb-4">
          <div className="h-4 bg-gray-400 rounded w-20" />
          <span className="h-4 bg-gray-400 rounded w-10" />
        </div>
  
        <div className="flex align-middle justify-between mb-4">
          <span className="h-6 bg-gray-400 rounded w-2/3 mb-4" />
        </div>
      </div>
    );
  };
  
  export default Loading;