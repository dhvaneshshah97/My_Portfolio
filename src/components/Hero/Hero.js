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
        I am a Software Engineer who likes to build stuff with React, JavaScript and Python
      </SectionText>
      <a href="https://drive.google.com/file/d/1f3aMm5kMiO2XXSv7YcRM1LAOut4ERxBR/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><Button>Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;