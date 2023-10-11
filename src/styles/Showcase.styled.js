import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
position: relative;
`

export const ShowcaseImagecard = styled.div`
border:1px: solid white;
width: max-content;
padding-top: 2rem;
border-radius: 1rem;
position: relative;
overflow: hidden;
`
export const Particle = styled.img`
position: absolute;
top: ${({ top }) => top};
left: ${({ left }) => left};
right: ${({ right }) => right};
bottom: ${({ bottom }) => bottom};
transform: rotate(${({ rotate })=> rotate});
`