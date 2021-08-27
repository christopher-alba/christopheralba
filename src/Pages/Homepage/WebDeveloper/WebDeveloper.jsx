import React from "react";
import { Container } from "semantic-ui-react";
import { MainWrapper, Logos, LogosWrapper, TextWrapper, Links } from "./styled";
const WebDeveloper = () => {
  return (
    <MainWrapper>
      <Container>
        <LogosWrapper>
          <Logos src="./jasper.png" alt="" />
          <Logos src="./udemy.jpg" alt="" />
          <Logos src="./eda.png" alt="" />
        </LogosWrapper>
        <TextWrapper>
          <h1>An aspiring web developer!</h1>
          <p style={{ fontSize: "1.5rem" }}>
            I started out learning web development online on{" "}
            <strong>
              <Links href="https://www.udemy.com/" target="_blank" rel="noreferrer">Udemy</Links>
            </strong>
            . I then enrolled myself in{" "}
            <strong>
              <Links href="https://devacademy.co.nz/" target="_blank" rel="noreferrer">Enspiral Dev Academy's</Links>
            </strong>{" "}
            boot camp. Afterwards, I landed a frontend engineering internship at{" "}
            <strong>
              <Links  target="_blank" rel="noreferrer" href="https://www.jasper.io/nz/landing/a-better-way-to-invest-in-commercial-real-estate?utm_source=search&utm_medium=cpc&utm_campaign=always_on&utm_content=brand&gclid=CjwKCAjwmqKJBhAWEiwAMvGt6IU004wjxWAQBSNaLoEUeGVah45bTru_X_SMxoVoHHPAIOJm4T326xoCAeIQAvD_BwE">
                Jasper
              </Links>
            </strong>
            .
          </p>
        </TextWrapper>
      </Container>
    </MainWrapper>
  );
};
export default WebDeveloper;
