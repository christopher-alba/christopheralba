import React from "react";
import {
  MainWrapper,
  InnerWrapper,
  Icon,
  TitleWrapper,
  StackWrapper,
  TechBarMain,
  TechBarTitle,
  TechBarProficiencyWrapper,
  TechBarProficiency,
} from "./styled";
import technologies from "./technologiesData";
import { JCUXContainer } from "../../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";

const Technologies = () => {
  return (
    <MainWrapper style={{ height: "fit-content", position: "relative" }}>
      <JCUXContainer>
        <InnerWrapper>
          <TitleWrapper>
            <Icon className="fas fa-code" />
            <JCUXTitle>MY TECHNOLOGY STACK</JCUXTitle>
          </TitleWrapper>
          <StackWrapper>
            {technologies.map((technology) => {
              return (
                <TechBarMain>
                  <TechBarTitle>
                    <p>{technology.name}</p>
                  </TechBarTitle>
                  <TechBarProficiencyWrapper>
                    <p
                      style={{
                        marginRight: "30px",
                        position: "relative",
                        zIndex: 10,
                        marginBottom: "0px",
                      }}
                    >
                      {technology.proficiency}% Proficient
                    </p>
                    <TechBarProficiency
                      style={{ width: `${technology.proficiency}%` }}
                    />
                  </TechBarProficiencyWrapper>
                </TechBarMain>
              );
            })}
          </StackWrapper>
        </InnerWrapper>
      </JCUXContainer>
    </MainWrapper>
  );
};

export default Technologies;
