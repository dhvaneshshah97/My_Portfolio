import React from 'react';
import { DiNodejsSmall  , DiReact, DiZend, DiExtjs, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with a range of technologies in the Software Development world. From Web to Mobile. From Front-end to Back-end.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React/Angular, TypeScript/JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, Python, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Flutter, React-Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB, MySQL, SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiExtjs size="3rem" />
        <ListContainer>
          <ListTitle>APIs and Tools</ListTitle>
          <ListParagraph>
            GraphQL, REST, Git, GitHub, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
