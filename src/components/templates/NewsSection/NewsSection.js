import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import React from 'react';
import { Wrapper } from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <h2>University news feed</h2>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
    </Wrapper>
  );
};

export default NewsSection;
