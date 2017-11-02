import React from 'react';
import styled from 'styled-components';
import t from '../styles/theme';
import { serif, sans } from '../styles/utils';
import { Button } from './Button';

const Container = styled.article`
  text-align: center;
  @media screen and (min-width: 50em) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & > * + * {
    margin-top: ${t.space[3]};
  }
  &:nth-child(even) > div {
    order: 1;
    margin-right: 0;
    margin-left: ${t.space[4]};
  }
`;

const Content = styled.div`
  ${serif};
  @media screen and (min-width: 50em) {
    margin-right: ${t.space[4]};
    flex: 0 0 60%;
  }
  & > * + * {
    margin-top: ${t.space[3]};
  }
`;

const Title = styled.h2`
  font-size: ${t.fontSizes[2]};
  ${sans};
  @media screen and (min-width: 50em) {
    font-size: ${t.fontSizes[3]};
  }
`;

export default ({ title, image, children }) => (
  <Container>
    <Content>
      <Title>{title}</Title>
      <p>{children}</p>
      <Button>View the full case study on Medium</Button>
    </Content>
    <img src={image} alt={`${title} case-study screenshot`} />
  </Container>
);