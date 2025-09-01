import { MutualFundImag } from "@/assets";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';
interface PropType {
  heading: string;
  imageUrl: StaticImageData | string,
  description: string;
}
const BlogCard: React.FC<PropType> = ({ description, heading, imageUrl }: PropType) => {

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt={'Mutual Fund Image Representing Money'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center flex-grow pr-4">
        {/* Heading */}

        <h2 className="text-md font-semibold text-gray-900 truncate">
        {heading}
        </h2>i
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
