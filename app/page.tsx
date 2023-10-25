"use client";

import type { NextPage } from "next";
import Layout from "@/components/layout";

import { Swiper, SwiperSlide } from "swiper/react";

import SliderBox from "@/components/home/sliderBox";

import { Slide } from "react-slideshow-image";
import { Navigation } from "swiper/modules";
// import "react-slideshow-image/dist/style.css";

const Home: NextPage = () => {
  const images = [
    "/assets/bg_company_gray.png",
    "/assets/bg_golf.jpeg",
    "/assets/bg_main.jpeg",
  ];

  return (
    <Layout title="홈">
      <div className="absolute top-0 h-full w-full bg-[url('/assets/bg_main_trim.jpg')] bg-cover bg-center">
        <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-50"></div>
        {/* <SliderBox /> */}
        <main className="relative z-30 flex h-full w-full items-center justify-center">
          {/* <section className="min-h-[196px] w-full space-y-8 bg-white bg-opacity-20 py-10 text-center text-white">
            <p className="bold text-5xl">다올프라이빗에쿼티는</p>
            <p className="light text-3xl">
              2021년 설립 이래 성공적으로 가치를 창출하고 있는 선도적인 사모투자
              전문회사입니다.
            </p>
          </section> */}

          <Swiper navigation={true} modules={[Navigation]} className="w-full">
            <SwiperSlide>
              <section className="min-h-[196px] w-full space-y-8 bg-white bg-opacity-20 py-10 text-center text-white">
                <p className="bold text-5xl">다올프라이빗에쿼티는</p>
                <p className="light text-3xl">
                  2021년 설립 이래 성공적으로 가치를 창출하고 있는 선도적인
                  사모투자 전문회사입니다.
                </p>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="min-h-[196px] w-full space-y-8 bg-white bg-opacity-20 py-10 text-center text-white">
                <p className="bold text-5xl">2</p>
                <p className="light text-3xl">
                  2021년 설립 이래 성공적으로 가치를 창출하고 있는 선도적인
                  사모투자 전문회사입니다.
                </p>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="min-h-[196px] w-full space-y-8 bg-white bg-opacity-20 py-10 text-center text-white">
                <p className="bold text-5xl">3</p>
                <p className="light text-3xl">
                  2021년 설립 이래 성공적으로 가치를 창출하고 있는 선도적인
                  사모투자 전문회사입니다.
                </p>
              </section>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
