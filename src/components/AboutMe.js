import React from "react";
import user from "../assets/imgs/user.png";
import { Layout } from "./Layout";

export const AboutMe = () => {
  return (
    <Layout>
      <section className="section5 flex" id="about">
        <h1 className="title">About Me</h1>

        <div className="about-container flex">
          <div className="left">
            <div className="bg"></div>
            <img src={user} alt="" />
          </div>

          <div className="right flex">
            <h1>Hari Bhatta</h1>
            <p>
              I grew up in Nepal and am currently living in Sydney, Australia.
            </p>

            <p>Sydney, Australia</p>

            <a href="">Connect with me</a>

            <div className="flex">
              <div className="tag">Interests</div>
              <div>
                <span>Coding</span>
                <span>Football</span>
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
