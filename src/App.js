import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import HomeRoute from './Components/Home/HomeRoute';
import AboutRout from './Components/About/AboutRout';
import { Route, Routes } from 'react-router-dom';
import ContactRout from './Components/Contact/ContactRout';
import SignIn from './Components/Auth/SignIn/SignIn';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/*">
          <Route index element={<HomeRoute />} />
          <Route path='about' element={<AboutRout />} />
          <Route path='contact' element={<ContactRout />} />
          <Route path='auth/sign-in' element={<SignIn />} />
          {/* <Route path='signup' element={<SignUp />} /> */}
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
