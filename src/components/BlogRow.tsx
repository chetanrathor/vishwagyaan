import Image from "next/image";

interface BlogRowProps {
  image: string;
  title: string;
  description: string;
}

const BlogRow: React.FC<BlogRowProps> = ({ image, title, description }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      {/* Fixed Image Section */}
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center flex-grow pr-4">
        {/* Heading */}
        <h2 className="text-sm font-semibold text-gray-900 truncate">
          {title}
        </h2>
        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default BlogRow;
