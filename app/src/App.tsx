import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider
} from '@apollo/client';
// import { Route, Switch } from 'react-router-dom';

import { client } from './apollo-client';
import { defaultTheme } from './theme'
import Header from './components/Header';
import GlobalStyle from './globalStyles';
import People from './components/People';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <People />
          </Wrapper>
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.bg};
  background-repeat: no-repeat;
  color: ${props => props.theme.colorTheme};
  background-size: cover;
`

export default App;
