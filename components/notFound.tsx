"use client";
import Parallax from "parallax-js";
import "@/app/404.scss";
import { useEffect } from "react";

export default function NotFoundUI() {
  // Parallax Code

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene: any = document.getElementById("scene");
      const parallax = new Parallax(scene);
    }
  }, []);

  return (
    <>
      <div className="about">
        <a className="bg_links social portfolio" href="#" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links social dribbble" href="#" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links social linkedin" href="#" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>

      <nav>
        <div className="menu">
          <p className="website_name">LOGO</p>
          <div className="menu_links">
            <a href="" className="link">
              about
            </a>
            <a href="" className="link">
              projects
            </a>
            <a href="" className="link">
              contacts
            </a>
          </div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>

      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <button>i dare!</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
