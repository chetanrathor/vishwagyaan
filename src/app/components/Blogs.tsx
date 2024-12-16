
import { CareerGrowthComponent, ChildGoodMeal, ChildrenDisciplineComponent, DigitalDetoxComponent, DigitalMarketing, FinancialPlanningComponent, FitnessTipsComponent, Freelancing, HealthInsurance, HomeBuyingTipsComponent, IndiasFamousTouristPlaces, Investing, MentalHealth, SustainableLifestyleComponent, TimeManagement, YogaComponent } from "./Data/HealthInsurance";
import LifeInsurance from "./Data/LifeInsurance";
import MutualFundBlogRow from "./Data/MutualFundBlogRow";

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
     <MutualFundBlogRow></MutualFundBlogRow>
     <LifeInsurance></LifeInsurance>
     <HealthInsurance></HealthInsurance>
     <SustainableLifestyleComponent></SustainableLifestyleComponent>
     <ChildrenDisciplineComponent></ChildrenDisciplineComponent>
     <HomeBuyingTipsComponent></HomeBuyingTipsComponent>
     <YogaComponent></YogaComponent>
     <FinancialPlanningComponent></FinancialPlanningComponent>
     <FitnessTipsComponent></FitnessTipsComponent>
     <CareerGrowthComponent></CareerGrowthComponent>
     <DigitalDetoxComponent></DigitalDetoxComponent>
     <DigitalMarketing></DigitalMarketing>
     <ChildGoodMeal></ChildGoodMeal>
     <TimeManagement></TimeManagement>
     <Investing></Investing>
     <MentalHealth></MentalHealth>
     <Freelancing></Freelancing>
     <IndiasFamousTouristPlaces></IndiasFamousTouristPlaces>
    </div>
  );
};

export default Blogs;
