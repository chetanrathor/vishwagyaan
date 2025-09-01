const BlogRowSkeleton: React.FC = () => {
    return (
      <div className="flex items-center bg-gray-200 shadow-lg rounded-lg h-[100px] mb-6 animate-pulse">
        <div className="w-1/12 h-full bg-gray-300 rounded-l-lg"></div>
        <div className="w-2/12 p-4 space-y-4">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    );
  };
  
  export default BlogRowSkeleton;
  