import Image from "next/image";
import MutualFund from '../../assets/images/MutualFund.jpg'
interface BlogRowProps {
  image: string;
  title: string;
  description: string;
}

const MutualFundBlogRow: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      {/* Fixed Image Section */}
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={MutualFund}
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
          म्यूचुअल फंड क्या है?
        </h2>
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
        म्यूचुअल फंड एक ऐसा निवेश माध्यम है, जिसमें बहुत सारे निवेशकों का पैसा इकट्ठा करके विभिन्न परिसंपत्तियों (जैसे शेयर, बॉन्ड, या अन्य वित्तीय साधन) में निवेश किया जाता है। इस फंड को एक पेशेवर फंड प्रबंधक (Fund Manager) द्वारा प्रबंधित किया जाता है।
        </p>
      </div>
    </div>
  );
};

export default MutualFundBlogRow;
