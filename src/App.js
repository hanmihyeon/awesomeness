import React, {Component, Fragment} from 'react';
import styled, {createGlobalStyle, css, keyframes, ThemeProvider} from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle `
  body {
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div `
  background-color: red;
`;

const Container = styled.div `
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
`;

const Button = styled.button `
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const awesomeCard = css `
  box-shadow: 0 4px 6px rgba(50, 50, 93, 07.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled
    .input
    .attrs({required: true})`
  ${awesomeCard};
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalStyle/>
                    <Container>
                        <Input placeholder="hello"/>
                        <Form/>
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

export default App;
