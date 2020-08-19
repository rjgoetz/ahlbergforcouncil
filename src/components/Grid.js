import { shape, bool, number, oneOf } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: ${(props) => props.theme.gutter}px;
  padding-right: ${(props) => props.theme.gutter}px;
  @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
    ${(props) => !props.fluid && `max-width: ${props.theme.viewPort.xxl}`};
  }
`;

Container.propTypes = {
  fluid: bool,
};

const Row = styled.div`
  align-items: ${(props) => props.alignItems};
  display: flex;
  flex-wrap: wrap;
  margin-left: ${(props) => props.theme.gutter * -1}px;
  margin-right: ${(props) => props.theme.gutter * -1}px;
`;

Row.propTypes = {
  alignItems: oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};

const calcGridColumnAndOffsetCss = (props, viewPort) => {
  let css = '';

  if (typeof props[viewPort] === 'number') {
    const width = (props[viewPort] / 12) * 100;
    css = `flex: 0 0 ${width}%; max-width: ${width}%;`;
  } else if (props[viewPort].column || props[viewPort].offset) {
    const width = props[viewPort].column
      ? (props[viewPort].column / 12) * 100
      : 100;
    const offset = props[viewPort].offset
      ? (props[viewPort].offset / 12) * 100
      : 0;
    css = `flex: 0 0 ${width}%; max-width: ${width}%; margin-left: ${offset}%;`;
  }

  return css;
};

const Column = styled.div`
  ${(props) => props.align && `display: flex; align-items: ${props.align}`};
  ${(props) =>
    props.justify && `display: flex; justify-content: ${props.justify}`};

  ${(props) => {
    return props.xs && calcGridColumnAndOffsetCss(props, 'xs');
  }}
  padding-left: ${(props) => props.theme.gutter}px;
  padding-right: ${(props) => props.theme.gutter}px;
  position: relative;
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    ${(props) => {
      return props.sm && calcGridColumnAndOffsetCss(props, 'sm');
    }}
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    ${(props) => {
      return props.md && calcGridColumnAndOffsetCss(props, 'md');
    }}
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    ${(props) => {
      return props.lg && calcGridColumnAndOffsetCss(props, 'lg');
    }}
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    ${(props) => {
      return props.xl && calcGridColumnAndOffsetCss(props, 'xl');
    }}
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
    ${(props) => {
      return props.xxl && calcGridColumnAndOffsetCss(props, 'xxl');
    }}
  }
`;

Column.defaultProps = {
  xs: 12,
};

Column.propsTypes = {
  xs:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  sm:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  md:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  lg:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  xl:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  xxl:
    number.isRequired ||
    shape({ column: number.isRequired, offset: number.isRequired }).isRequired,
  align: oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'space-between',
    'space-around',
  ]),
  justify: oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};

export { Container, Row, Column };
