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
<FlexContainer fullWidthChild>
    <SkillsCardContainer>
{Skills.map((skill) => (
<SkillsCard>
    <IconContainer size="5rem" color="blue">
        {skill.icon}
    </IconContainer>
<Heading as="h4" size="h4">
{skill.tech}
</Heading>

</SkillsCard>   
))}        
</SkillsCardContainer> 

        <div>

        </div>


</FlexContainer>
   </PaddingContainer>
    )
}

export default MySkills