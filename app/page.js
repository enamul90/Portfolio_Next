import HeroComponent from "@/app/component/HeroComponent";
import Profile from "@/app/component/Profile";
import Service from "@/app/component/Service";
import Summary from "@/app/component/Summary";
import ProjectComponent from "@/app/component/ProjectComponent";
import WorkExperience from "@/app/component/WorkExperience";


export default function Home() {


  return (
     <div className="overflow-x-hidden ">
         <HeroComponent />
         <Profile />
         <Service />
         <Summary />
         <ProjectComponent />
         <WorkExperience />
         <div className="py-52"></div>
     </div>
  );
}
