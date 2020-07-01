import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../../app/theme';
import NavBar from '../../components/NavBar/NavBar';
import MainContent from '../../components/MainContent/MainContent';
import ApolloGraphql from '../../components/ApolloGraphql/ApolloGraphql';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import COMPANY_REGISTRATION_API from './constants';
const client = new ApolloClient({
  uri: COMPANY_REGISTRATION_API
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <CssBaseline />
        <CssBaseline />
        <NavBar/>
        {/* <MainContent/> */}
        <ApolloGraphql/>
        </ApolloProvider>
    </ThemeProvider>
  );
}
