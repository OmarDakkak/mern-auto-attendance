import React from "react";

import styled from "styled-components";

import EmailSVG from "./Icons/EmailSVG";
import LinkedInSVG from "./Icons/LinkedInSVG";
import GitHubSVG from "./Icons/GitHubSVG";

const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Contact = () => {
  const width = window.innerWidth;
  return (
    <Section id="contact">
      <div className="container">
        <SectionTitle>Contact us !!</SectionTitle><br/><br/><br/>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <EmailSVG/>
              </IconWrap>
              <BoxTitle>Email</BoxTitle>
              <Text>
                For questions : <br/>
                Omar Dakkak : <a href = "mailto: omardakkak98@gmail.com">Send Email</a> <br/>
                Abdelfettah Hajjioui :<a href = "mailto: abdelfettah.hajjioui@gmail.com">Send Email</a> <br/> 
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <LinkedInSVG/>
              </IconWrap>
              <BoxTitle>LinkedIn</BoxTitle>
              <Text>
                To check our professional Accounts! <br/>
                Omar Dakkak : <a href={"https://www.linkedin.com/in/omar-dakkak-9ab822187/"} target="_blank" rel="noopener noreferrer">here!</a><br/>
                Abdelfettah Hajjioui :<a href={"https://www.linkedin.com/in/abdelfettah-hajjioui-6880a319a/"} target="_blank" rel="noopener noreferrer">here!</a><br/> 
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <GitHubSVG/>
              </IconWrap>
              <BoxTitle>GitHub</BoxTitle>
              <Text>
                For any Issues, you want us to fix. <br/>
                Omar Dakkak : <a href={"https://github.com/OmarDakkak"} target="_blank" rel="noopener noreferrer">here!</a><br/>
                Abdelfettah Hajjioui : <a href={"https://github.com/Abdelfettah-Hajjioui"} target="_blank" rel="noopener noreferrer">here!</a><br/> 
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;