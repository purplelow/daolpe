import type { NextPage } from "next";
import Layout from "@/components/layout";
import SliderBox from "@/components/home/sliderBox";

const Home: NextPage = () => {
  return (
    <Layout title="홈">
      <div className="absolute top-0 h-full w-full bg-[url('/assets/main_bg.jpeg')] bg-cover">
        <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-50"></div>
        <section className=""> </section>
        <SliderBox />
        {/* <main className="z-20 mx-auto max-w-7xl px-8 sm:px-16">
          <section className="pt-6"> Contents </section>
          
          <section></section>
        </main> */}
      </div>
    </Layout>
  );
};

export default Home;
