import Banner from "@/components/Company/OurTeam/banner";
import ClientTestimonials from "@/components/Company/OurTeam/Clients";
import LeadershipTeam from "@/components/Company/OurTeam/OurTeam";
import PhanDau from "@/components/Company/OurTeam/phandau";
import SecondBanner from "@/components/Company/OurTeam/SecondBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";


export default function Home(){
    return (
        <>
           <Header/>
           <Banner/>
           <PhanDau></PhanDau>

           <LeadershipTeam/>
           <SecondBanner/>
           <ClientTestimonials/>
           <Footer/>
           
        </>
    )
    
}