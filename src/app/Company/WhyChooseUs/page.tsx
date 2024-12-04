
import AboutCompany from "@/components/Company/WhyChooseUs/AboutCompany";
import Banner from "@/components/Company/WhyChooseUs/banner";
import Introduce from "@/components/Company/WhyChooseUs/Introduce";
import OurService from "@/components/Company/WhyChooseUs/OurService";
import RecentNews from "@/components/Company/WhyChooseUs/Recent";
import TechnologyIndex from "@/components/Company/WhyChooseUs/TechnologyIndex";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home(){
    return(
        <>
        <Header/>
        <Banner/>
        <div className="">
        <AboutCompany/>
        <OurService/>
        <Introduce/>
        <TechnologyIndex/>
        <RecentNews/>
        </div>
        <Footer/>
        </>
    )
}