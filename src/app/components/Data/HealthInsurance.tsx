import Image from "next/image";
import HealthInsuranceImage from '../../assets/images/health.jpg'
import LifeStyleImage from '../../assets/images/lifestyle.jpg'
import ChildDisciplineImage from '../../assets/images/child-discipline.jpg'
import RealStateImage from '../../assets/images/realstate.jpg'
import YoagImage from '../../assets/images/yoga.jpg'
import FinancialPlanning from '../../assets/images/financial.jpg';
import FitnessTips from '../../assets/images/fitness.jpg';
import CareerGrowth from '../../assets/images/career.jpg';
import DigitalDetox from '../../assets/images/digitaldetox.jpg';
import TouristImage from '../../assets/images/tourist.jpg';
import FreeLancing from '../../assets/images/freelancing.jpg';
import MentalHealthImage from '../../assets/images/mentalHealth.jpg';
import InvestingImage from '../../assets/images/Investing.jpg';
import TimeManagementImage from '../../assets/images/timeManagement.jpg';
import ChildGoodMealImage from '../../assets/images/child-discipline.jpg';
import DigitalMarketingImage from '../../assets/images/digitalMarketing.jpg';

const HealthInsurance: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      {/* Fixed Image Section */}
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={HealthInsuranceImage}
          alt={'Image for HealthInsurance'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center flex-grow pr-4">
        {/* Heading */}
        <h2 className="text-md font-semibold text-gray-900 truncate">
          स्वास्थ्य बीमा क्या है और क्यों आवश्यक है?
        </h2>
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          स्वास्थ्य बीमा आज की जीवनशैली में एक जरूरी सुरक्षा है। यह अस्पताल के खर्चों से बचाने और आर्थिक बोझ कम करने में मदद करता है। जानें, इसे सही तरीके से कैसे चुनें।
        </p>
      </div>
    </div>
  );
};




// Sustainable Lifestyle Component
const SustainableLifestyleComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={LifeStyleImage}
          alt={'Sustainable Lifestyle Image Representing Eco-Friendly Living'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          सस्टेनेबल लाइफस्टाइल कैसे अपनाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          सस्टेनेबल जीवनशैली अपनाने से न केवल पर्यावरण को लाभ होता है, बल्कि आपकी सेहत और बजट पर भी सकारात्मक असर पड़ता है। जानिए, इसे अपनी दिनचर्या में कैसे शामिल करें।
        </p>
      </div>
    </div>
  );
};

// Children Discipline Component
const ChildrenDisciplineComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={ChildDisciplineImage}
          alt={'Children Discipline Image Representing Positive Parenting'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          बच्चों के लिए अनुशासन कैसे सिखाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          बच्चों को अनुशासन सिखाना आसान नहीं है, लेकिन सही रणनीतियां और सकारात्मक पेरेंटिंग मदद कर सकती हैं। जानिए, बच्चों को बिना दबाव के प्रेरित करने के तरीके।
        </p>
      </div>
    </div>
  );
};

// Home Buying Tips Component
const HomeBuyingTipsComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={RealStateImage}
          alt={'Home Buying Image Representing Property'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          घर खरीदने से पहले ध्यान देने योग्य बातें
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          घर खरीदना एक बड़ा फैसला है। सही लोकेशन, बजट और कागजी प्रक्रिया को समझना बेहद जरूरी है। जानिए, इसे आसानी से कैसे प्रबंधित करें।
        </p>
      </div>
    </div>
  );
};

// Yoga Component
const YogaComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={YoagImage}
          alt={'Yoga Image Representing Health and Peace'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          योग: शरीर और मन का संतुलन
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          योग सेहत और मानसिक शांति के लिए बेहतरीन साधन है। जानिए, कौन-से योगासन आपके लिए सही हैं और इसे दिनचर्या का हिस्सा कैसे बनाएं।
        </p>
      </div>
    </div>
  );
};



// Financial Planning Component
const FinancialPlanningComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={FinancialPlanning}
          alt={'Financial Planning Image Representing Savings and Investments'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          वित्तीय योजना कैसे बनाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          सही वित्तीय योजना आपको अपने लक्ष्यों को हासिल करने में मदद कर सकती है। जानिए, बजट बनाना और निवेश करना क्यों जरूरी है।
        </p>
      </div>
    </div>
  );
};

// Fitness Tips Component
const FitnessTipsComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={FitnessTips}
          alt={'Fitness Tips Image Representing Health and Exercise'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          फिटनेस टिप्स: स्वस्थ जीवनशैली के लिए
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          फिट रहना अब केवल एक विकल्प नहीं, बल्कि आवश्यकता है। जानिए, सरल और प्रभावी फिटनेस टिप्स।
        </p>
      </div>
    </div>
  );
};

// Career Growth Component
const CareerGrowthComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={CareerGrowth}
          alt={'Career Growth Image Representing Professional Success'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          करियर में ग्रोथ के उपाय
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          करियर में आगे बढ़ने के लिए सही दिशा और प्रयास आवश्यक हैं। जानिए, अपने स्किल्स को कैसे बढ़ाएं।
        </p>
      </div>
    </div>
  );
};

// Digital Detox Component
const DigitalDetoxComponent: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={DigitalDetox}
          alt={'Digital Detox Image Representing Mindful Living'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          डिजिटल डिटॉक्स क्यों जरूरी है?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          लगातार स्क्रीन समय आपके मानसिक और शारीरिक स्वास्थ्य पर असर डाल सकता है। जानिए, डिजिटल डिटॉक्स के फायदे।
        </p>
      </div>
    </div>
  );
};
const DigitalMarketing: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={DigitalMarketingImage}
          alt={'Digital marketing Image Representing Mindful Living'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          डिजिटल मार्केटिंग में करियर कैसे बनाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          डिजिटल मार्केटिंग एक तेजी से बढ़ता हुआ क्षेत्र है। जानिए, इसके लिए कौन-से कौशल और सर्टिफिकेशन जरूरी हैं और नौकरी के बेहतर अवसर कहां हैं।
        </p>
      </div>
    </div>
  );
};
const ChildGoodMeal: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={ChildGoodMealImage}
          alt={'Good Meal for the child'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          बच्चों के लिए पौष्टिक आहार का महत्व
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          बच्चों की सेहत के लिए संतुलित और पौष्टिक आहार बेहद जरूरी है। जानिए, कौन-से खाद्य पदार्थ उनकी सेहत और विकास में मदद करते हैं।
        </p>
      </div>
    </div>
  );
};
const TimeManagement: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={TimeManagementImage}
          alt={'Image showing the time management '}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          प्रभावी समय प्रबंधन कैसे करें?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          समय प्रबंधन से जीवन में उत्पादकता और सफलता बढ़ती है। जानिए, कौन-सी तकनीकें आपको बेहतर समय प्रबंधन में मदद कर सकती हैं।
        </p>
      </div>
    </div>
  );
};
const Investing: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={InvestingImage}
          alt={'An Image for the investing.'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          निवेश की शुरुआत कैसे करें?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          निवेश करना आसान हो सकता है, अगर आप सही दिशा में शुरुआत करें। जानिए, म्यूचुअल फंड और अन्य विकल्पों के बारे में।
        </p>
      </div>
    </div>
  );
};
const MentalHealth: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={MentalHealthImage}
          alt={'Image representing about the mental health'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          मेंटल हेल्थ को कैसे बेहतर बनाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          मानसिक स्वास्थ्य को नजरअंदाज करना खतरनाक हो सकता है। जानिए, ध्यान, मेडिटेशन और छोटे-छोटे बदलाव आपकी मानसिक स्थिति को कैसे सुधार सकते हैं।
        </p>
      </div>
    </div>
  );
};
const Freelancing: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={FreeLancing}
          alt={'Image for Freelancing'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          फ्रीलांसिंग: घर बैठे पैसे कैसे कमाएं?
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          फ्रीलांसिंग आपको घर बैठे काम करने और कमाने का मौका देती है। जानिए, कौन-से प्लेटफॉर्म और स्किल्स से शुरुआत करना सबसे आसान है।
        </p>
      </div>
    </div>
  );
};
const IndiasFamousTouristPlaces: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-[100px] mb-4 gap-4">
      <div className="w-[100px] h-full relative flex-shrink-0">
        <Image
          src={TouristImage}
          alt={'India Top Tourist Place One of represing by the lady'}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow pr-4">
        <h2 className="text-md font-semibold text-gray-900 truncate">
          भारत के प्रमुख पर्यटन स्थल
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          भारत की ऐतिहासिक धरोहर और प्राकृतिक सुंदरता दुनिया भर में प्रसिद्ध है। जानिए, कौन-सी जगहें आपकी अगली यात्रा के लिए परफेक्ट हो सकती हैं।
        </p>
      </div>
    </div>
);
};

export { };


export {
  SustainableLifestyleComponent,
  ChildrenDisciplineComponent,
  HomeBuyingTipsComponent,
  YogaComponent,
  HealthInsurance,
  FinancialPlanningComponent,
  FitnessTipsComponent,
  CareerGrowthComponent,
  DigitalDetoxComponent,
  DigitalMarketing,
  ChildGoodMeal,
  TimeManagement,
  Investing,
  MentalHealth,
  Freelancing,
  IndiasFamousTouristPlaces

};
