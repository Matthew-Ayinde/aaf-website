import Advancing from "@/components/Advancing";
import Banner from "@/components/Banner";
import HomePagePillars from "@/components/HomePagePillars";
import Programmes from "@/components/Programmes";
import WhatIsNew from "@/components/WhatIsNew";

export default function Home() {

  return (
    <div className="w-full mx-auto">
      <Banner />
      <Advancing />
      <HomePagePillars />
      <Programmes />
      <WhatIsNew />
    </div>
  );
}
