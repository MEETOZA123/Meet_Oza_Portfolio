import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Typewriter
            words={['Software Developer', 'ML Engineer', 'AI Engineer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </SectionTitle>
        <SectionText>
          Hi, I’m Meet Oza, a Software Engineer at Incedo Inc., with a Bachelor’s in Information Technology from IET DAVV. I build scalable backend and data platforms using Java, AWS, and PySpark.
        </SectionText>
        <Button onClick={() => window.open('/resume.pdf', '_blank')}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;