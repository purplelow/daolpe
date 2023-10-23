import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";

const Live: NextPage = () => {
  return (
    <Layout title="company">
      <div className="absolute top-0 h-full w-full bg-[url('/assets/bg_company_gray.png')] bg-cover bg-center">
        {/* <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-50"></div> */}
        {/* <div className="relative z-30 flex h-full items-center justify-center">
          <span className="h-auto text-8xl text-white">
            DAOL Private Equity
          </span>
        </div> */}
        <main className="relative z-30 flex h-full w-full items-center justify-center">
          <section className="min-h-[196px] w-full space-y-8 bg-white bg-opacity-20 py-10 text-center text-white">
            <p className="bold h-full text-5xl">DAOL Private Equity</p>
            {/* <p className="light text-3xl">
              2021년 설립 이래 성공적으로 가치를 창출하고 있는 선도적인 사모투자
              전문회사입니다.
            </p> */}
          </section>

          <section></section>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Live;
