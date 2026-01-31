import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, SkillList, SkillItem } from './TechnologiesStyles';
import { SkillsData } from '../../constants/constants';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development and data engineering world.
    </SectionText>
    <List>
      {SkillsData.map((item) => (
        <ListItem key={item.slug}>
          <ListTitle>{item.title}</ListTitle>
          <ListContainer>
            <SkillList>
              {item.skills.map((skill, i) => (
                <SkillItem key={i}>
                  <skill.icon />
                  <span>{skill.name}</span>
                </SkillItem>
              ))}
            </SkillList>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
