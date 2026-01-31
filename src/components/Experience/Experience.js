
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ExperienceData } from '../../constants/constants';
import { Box, Boxes, BoxWrapper, BoxTitle, BoxSubtitle, BoxText, Date } from './ExperienceStyles';

const calculateDuration = (dateString) => {
    const months = {
        'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
        'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    try {
        const [startStr, endStr] = dateString.split(' – ');
        const [startMonth, startYear] = startStr.split(' ');

        let endYear, endMonth;
        if (endStr.toLowerCase() === 'present') {
            const now = new Date();
            endYear = now.getFullYear();
            endMonth = now.getMonth();
        } else {
            const [eMonth, eYear] = endStr.split(' ');
            endYear = parseInt(eYear);
            endMonth = months[eMonth];
        }

        const startY = parseInt(startYear);
        const startM = months[startMonth];

        return (endYear - startY) * 12 + (endMonth - startM) + 1;
    } catch (e) {
        return 6; // Default duration if parsing fails
    }
};

const Experience = () => (
    <Section id="experience">
        <SectionTitle>Experience</SectionTitle>
        <Boxes>
            {ExperienceData.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const duration = calculateDuration(exp.date);
                return (
                    <BoxWrapper key={index} $isLeft={isLeft}>
                        <Box $isLeft={isLeft} $duration={duration}>
                            <BoxTitle>{exp.position}</BoxTitle>
                            <BoxSubtitle>
                                {exp.company}
                                <Date>{exp.date}</Date>
                            </BoxSubtitle>
                            <div style={{ marginTop: '14px' }}>
                                {exp.points.map((point, i) => (
                                    <BoxText key={i}>{point}</BoxText>
                                ))}
                            </div>
                        </Box>
                    </BoxWrapper>
                )
            })}
        </Boxes>
        <SectionDivider />
    </Section>
);

export default Experience;
