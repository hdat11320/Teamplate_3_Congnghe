import Banner from "@/components/Company/AboutUs/banner";
import LeadershipTeam from "@/components/Company/AboutUs/LeaderShipTeam";
import WhatWeOffer from "@/components/Company/AboutUs/Offer";
import TechnologyIndex from "@/components/Company/AboutUs/TechnologyIndex";
import WhatWeDo from "@/components/Company/AboutUs/WeDo";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home(){
    return (
        <>
        <Header/>
        <Banner/>
        <WhatWeOffer/>
        <WhatWeDo/>
        <LeadershipTeam/>
        <TechnologyIndex/>
        <Footer/>
        </>
    )
}