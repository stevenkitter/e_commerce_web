import styled from "styled-components";

const Breakpoints = {
  xs: `0px`,
  sm: `600px`,
  md: `960px`,
  lg: `1280px`,
  xl: `1920px`
};

export const Container = styled.div`
  @media (min-width: ${Breakpoints.lg}) {
    max-width: ${Breakpoints.lg};
    margin: 0 auto;
  }
`;

export const Caret = styled.i`
  position: relative;
  display: inline-block;
  &::after {
    top: -7px;
    z-index: 1;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    left: 5px;
    border: 5px solid transparent;
    border-top-color: #333;
  }
  &::before {
    top: -9px;
    z-index: 2;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    left: 5px;
    border: 5px solid transparent;
    border-top-color: #ffffff;
  }
`;
