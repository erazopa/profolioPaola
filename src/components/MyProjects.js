import React from 'react'

//import global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
}from '../styles/Global.styled'

import { projectDetails } from '../utils/Data'
import Project from './layouts/Project'

const MyProjects = () => {
  return (
    <PaddingContainer
    id="Projects"
    top="5%"
    bottom="5%"
    margin_left="6rem"
    >   
<Heading as="h4" size="h4">
    MIS PROYECTOS
</Heading>

<Heading as="h2" size="h2">
    QUE HE <BlueText>DESARROLLADO</BlueText> 
</Heading>

{projectDetails.map((project) =>(
    <PaddingContainer key={project.id} top="5rem" 
    bottom="5rem">
    <Project data={project} />
    </PaddingContainer>
))}
    </PaddingContainer>
  )
}

export default MyProjects
