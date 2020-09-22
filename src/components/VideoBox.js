import styled from 'styled-components';

const VideoBox = styled.div`
  height: 301px;
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    height: 338px;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    height: 428px;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    margin-left: auto;
    margin-right: auto;
    width: 720px;
    height: 405px;
  }
`;

export default VideoBox;
