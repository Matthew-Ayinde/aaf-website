import Advancing from "@/components/Advancing";
import Awaiting from "@/components/Awaiting";
import Banner from "@/components/Banner";
import HomePagePartner from "@/components/HomePagePartner";
import HomePagePillars from "@/components/HomePagePillars";
import HomePageProgramme from "@/components/HomePageProgramme";
import Programmes from "@/components/Programmes";
import WhatIsNew from "@/components/WhatIsNew";
import SubscribeComp from "@/components/shared/SubscribeComp";


export default function Home() {

  return (
    <div className="w-full mx-auto">
      <Banner />
      <Advancing />
      <HomePagePillars />
      <HomePageProgramme />
      <HomePagePartner />
      <Programmes />
      <Awaiting />
      <WhatIsNew />
      <SubscribeComp />
    </div>
  );
}
