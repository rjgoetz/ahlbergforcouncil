import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Type from 'Components/Type';
import VideoBox from 'Components/VideoBox';

const StyledMedia = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.ltGrey};
  border-top: 1px solid ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 0;
`;

const MediaBit = ({ date, title, caption, children }) => {
  return (
    <StyledMedia>
      <Type
        el="sm"
        css={`
          margin-bottom: 0;
        `}
      >
        {date}
      </Type>
      <Type el="h3" size="base">
        {title}
      </Type>
      <VideoBox>{children}</VideoBox>
      <Type size="sm">{caption}</Type>
    </StyledMedia>
  );
};

MediaBit.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MediaBit;
