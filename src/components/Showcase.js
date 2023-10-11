import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

//import showcase styles

import {
  ShowcaseImagecard,
  ShowcaseParticleContainer,
  Particle,
} from "../styles/Showcase.styled";

//import react-icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

//import asset
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer fullWidthChild>
        {/*--left-content--*/}
        <div>
          <Heading as="h1" size="h1">
            Paola
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            <BlueText>Adriana Erazo</BlueText>
          </Heading>
          <Heading as="h2" top="2rem" bottom="4rem">
            Desarrolladora Front End
          </Heading>
          <ParaText as="p">
            Con manejo de diferentes tecnologías, responsable, positiva,
            <BlueText>dispuesta a aprender y estar a la vanguardia.</BlueText>
            Con experiencia en el desarrollo de varias tareas, en generar un
            ambiente laboral entusiasta y saludable.
          </ParaText>

          {/* --social-icons-- */}
          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </div>

        {/* --right-content-- */}
        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImagecard>
              <img src={ShowcaseImg} alt="showcase " width="500px" />
            </ShowcaseImagecard>
          <Particle
          src={BackgroundImg}
          alt="particle"
          top="-80px"
          left="20px"
          rotate="60deg"
          />
            <Particle
          src={BackgroundImg}
          alt="particle"
          top="50px"
          right="-70px"
          rotate="0deg"
          />
          <Particle
          src={BackgroundImg}
          alt="particle"
          bottom="10px"
          left="-70px"
          rotate="50deg"
          />
            </ShowcaseParticleContainer>
          </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
