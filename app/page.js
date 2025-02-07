import HeroComponent from "@/app/component/HeroComponent";
import Profile from "@/app/component/Profile";
import Service from "@/app/component/Service";


export default function Home() {


  return (
     <div className="overflow-x-hidden ">
         <HeroComponent />
         <Profile />
         <Service />

         <div className="py-52"></div>
     </div>
  );
}
