import HeroComponent from "@/app/component/HeroComponent";
import Profile from "@/app/component/Profile";
import Service from "@/app/component/Service";
import Summary from "@/app/component/Summary";
import ProjectComponent from "@/app/component/ProjectComponent";
import WorkExperience from "@/app/component/WorkExperience";
import Footer from "@/app/component/Footer";
import Nave from "@/app/component/Nave";



export default function Home() {


  return (
     <div className="overflow-hidden ">
         <Nave />
         <HeroComponent />
         <Profile />
         <Service />
         <Summary />
         <ProjectComponent />
         <WorkExperience />
         <Footer />
     </div>
  );
}
