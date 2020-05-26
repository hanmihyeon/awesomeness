import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

// injectGlobal이 createGlobalStyle로 변경됐음 아래 링크 참고
// https://styled-components.com/docs/api#deprecated-injectglobal
// https://styled-components.com/docs/api#withcomponent
// https://styled-components.com/docs/basics#extending-styles

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <GlobalStyle />
      <Container>
        <Button>Hello</Button>
        <Button danger rotationTime={5}>Hello</Button>
        <Anchor as="a" href="http://google.com">Go to google</Anchor>
      </Container>
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

// style component styled. 뒤에는 스타일을 적용할 html 요소 입력 그 뒤에 `` 
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline:none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${props => {
    if(props.danger) {
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }};
`;

const Anchor = styled(Button)`
  text-decoration: none;
  `;

  const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `

export default App;
