import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: any,
  img: string,
}

const ItemContentContainer = styled.div`
  @media(max-width: 1200px) {
    width: 100%:
  }
`;

const ItemContentImage = styled.img`
  margin-bottom: 20px;
  height: 268px;
  width: 391px;

  @media (max-width: 1200px) {
    height: auto;
    max-width: 100%;
  }
`;

const ItemContentParagraph = styled.p`
  color: #222;
  font-size: 1.2em;
  line-height: 2em;
  font-weight: 700;
  @media (max-width: 1200px) {
    padding: 20px 20px 25px 15px;
    width: 100%;
  }
`;

const TimeLineItemContent = ({ img, children }: Props) => {
  return (
    <ItemContentContainer>
      <ItemContentImage src={img} alt=""/>
      <ItemContentParagraph>
        { children }
      </ItemContentParagraph>
    </ItemContentContainer>
  )
}

export default TimeLineItemContent;