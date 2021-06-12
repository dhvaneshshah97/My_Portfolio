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
      <a href="#about"><Button>Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;