import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Type from 'Components/Type';

const StyledCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.ltGrey};
  margin-bottom: ${(props) => props.theme.rhythm()};
`;

const CardImage = styled.div`
  height: ${(props) => props.theme.rhythm(40)};
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: auto;
  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    height: ${(props) => props.theme.rhythm(60)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    height: ${(props) => props.theme.rhythm(40)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    height: ${(props) => props.theme.rhythm(50)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    height: ${(props) => props.theme.rhythm(40)};
  }
  & > div {
    height: 100%;
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Card = ({ title, date, media, children }) => {
  return (
    <StyledCard>
      <CardImage>{media}</CardImage>
      <CardBody>
        <Type el="h4">{date}</Type>
        <Type
          el="h2"
          size="md"
          css={`
            line-height: ${(props) => props.theme.rhythm()};
          `}
        >
          {title}
        </Type>
        {children}
      </CardBody>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  media: PropTypes.element.isRequired,
};

export default Card;
