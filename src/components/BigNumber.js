import styled from 'styled-components';

const BigNumber = styled.span`
  color: ${(props) => props.theme.colors.primary};
  display: block;
  font-size: 64px;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: ${(props) => props.theme.rhythm(8)};
  margin-bottom: ${(props) => props.theme.rhythm()};
`;

export default BigNumber;
