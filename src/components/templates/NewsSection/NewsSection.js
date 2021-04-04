import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import {
  ArticleWrapper,
  NewsSectionHeader,
  Wrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';

const data = [
  {
    title: 'New computer at school',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'New computer at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computer at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article image" /> : null}
          </ContentWrapper>
          <Button isBig>Read mode</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
