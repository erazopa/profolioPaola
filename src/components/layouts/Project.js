import React from "react";

//import global styles
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

//import project styles

import {
  TechStackCard,
  ProjectImage,
  ProjectImageContainer,
} from "../../styles/MyProject.styled";

//import assets
import { FaGithub } from "react-icons/fa";
import Project1 from "../../assets/Project1.png";

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      {/* --left-section-project-content-- */}
      <div>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
{data.project_desc}
        </ParaText>

        <Button>Visit Website</Button>
      </div>
      {/* --right-secction-project-image-- */}
      <ProjectImageContainer>
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
