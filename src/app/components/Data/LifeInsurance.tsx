import Image from "next/image";
import MutualFund from '../../assets/images/lifeinsurance.jpg'
interface BlogRowProps {
  image: string;
  title: string;
  description: string;
}

const LifeInsurance: React.FC = () => {
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
        जीवन बीमा कैसे कराएं? जीवन बीमा कराने के फायदे|
        </h2>
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
        जीवन बीमा आज के समय में एक महत्वपूर्ण वित्तीय साधन बन गया है, जो न केवल आपके परिवार को आर्थिक सुरक्षा प्रदान करता है, बल्कि भविष्य की अनिश्चितताओं के लिए भी तैयार करता है। यदि आप भी जीवन बीमा करवाने की योजना बना रहे हैं, तो यहां हम आपको इसे सरल भाषा में समझा रहे हैं।
        </p>
      </div>
    </div>
  );
};

export default LifeInsurance;
