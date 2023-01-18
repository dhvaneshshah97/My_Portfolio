import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br/>
        I am Dhvanesh
      </SectionTitle>
      <SectionText>
        I am a Software Engineer who likes to build projects with React/Angular, JavaScript and Python
      </SectionText>
      <a href="https://drive.google.com/file/d/1x_OSdzFzgARhviCT1wJ4nGlLaYXOY8Qa/view?usp=share_link" target="_blank" rel="noopener noreferrer" ><Button>Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;