import React from "react";

import styled from "styled-components";

import bgImg from "../assets/img/amphi.jpg";

const Section = styled.section `
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${bgImg});

  &:after,
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    border-bottom: 10px solid #fff;
    z-index: 1;
  }

  &:before {
    left: 50%;
    right: 0px;
    border-left: 11px solid transparent;
  }

  &:after {
    right: 50%;
    left: 0px;
    border-right: 11px solid transparent;
  }

  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 279px;
    padding-bottom: 111px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
  a{
    color: red;
    font-size:23px;
  }
`;

const BgOverlay = styled.div `
  background: linear-gradient(33deg, #8400ff, #413bff);
  opacity: 0.4;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #8400ff, #413bff);
  }
`;

const HomeTitle = styled.h1 `
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5 `
  font-size: 14px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;

const Home = () => {
    return (
        <Section id="home">
            <BgOverlay/>
            <div className="container-sa">
                <HomeTitle data-aos="zoom-in">
                    HD Auto Attendance is a project based on facial recognition, its goal is to
                    automate the attendance basically done manually by professors or supervisors
                    which is a lost of time, this project is created by Two ENSAH students : Omar
                    DAKKAK and Abdelfettah HAJJIOUI and supervised by : Pr. Mohammed ADDAM.
                </HomeTitle>
                <br/>
                <SubTitle data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
                    <a
                        href={"https://github.com/OmarDakkak/mern-auto-attendance"}
                        target="_blank"
                        rel="noopener noreferrer">Check out our GitHub Repository !</a>
                </SubTitle>
            </div>
        </Section>
    );
};

export default Home;
