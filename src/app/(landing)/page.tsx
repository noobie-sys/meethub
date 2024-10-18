import Image from "next/image";
import BannerImage from "./_components/banner";
import Information from "./_components/information";
import ExploreMeetups from "./_components/explore";
import Testonomials from "./_components/testonomials";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <BannerImage />
      <Information />
      <ExploreMeetups />
      <Testonomials />
    </main>
  );
}
