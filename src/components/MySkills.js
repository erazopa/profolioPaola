import React from 'react'

//import global styles
import {
FlexContainer,
PaddingContainer,
Heading,
IconContainer,
ParaText,
BlueText,
}from '../styles/Global.styled';

//import My skills styles
import {
SkillsCardContainer,
SkillsCard,
}from '../styles/MySkills.styled'; 

import { Skills } from '../utils/Data';

const MySkills = () => {    
  return (
   <PaddingContainer
   id="Skills"
   top="10%"
   bottom="10%"
   >
    <Heading  align="center" as="h2" size= "h2" top="0.5rem" left="4rem" bottom="2rem">
    Mis <BlueText>Habilidades</BlueText>
</Heading>
<FlexContainer fullWidthChild>
    {/* --left-section-- */}
    <SkillsCardContainer>
{Skills.map((skill) => (
<SkillsCard>
    <IconContainer color="blue" size="5rem">
        {skill.icon}
    </IconContainer>
<Heading as="h4" size="h4">
{skill.tech}
</Heading>

</SkillsCard>   
))}        
</SkillsCardContainer> 
{/* --rigth-section-- */}

        <div>



        </div>


</FlexContainer>
   </PaddingContainer>
    )
}

export default MySkills