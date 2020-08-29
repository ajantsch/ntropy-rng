import React from "react";
import styled from "styled-components";

class Demo extends React.PureComponent {
  render = (): React.ReactElement => {
    return <StyledSpan>Welcome to React Typescript Boilerplate</StyledSpan>;
  };
}

const StyledSpan = styled.span`
  margin: 1rem;
`;

export default Demo;
