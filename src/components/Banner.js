import styled from 'styled-components';
import { rgba, linearGradient } from 'polished';

const Banner = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.rhythm(60)};
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
    object-position: right;
    width: 100%;
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
`;

const OpacityLayer = styled.div`
  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0) 66%,
    rgba(27, 86, 51, 0.25) 100%
  );
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export { Banner, BannerText, OpacityLayer };
