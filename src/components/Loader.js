import styled, { keyframes } from 'styled-components';
import { Loader } from '@styled-icons/feather';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const StyledLoader = styled(Loader)`
  animation: ${rotate} 2s infinite linear;
  stroke-width: 2px;
`;

export default StyledLoader;
