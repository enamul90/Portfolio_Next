import HeroComponent from "@/app/component/HeroComponent";
import Profile from "@/app/component/Profile";


export default function Home() {


  return (
     <div className="overflow-x-hidden ">
         <HeroComponent />
         <Profile />
     </div>
  );
}
