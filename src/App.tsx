import React from 'react';
import GlobalStyled from './styles/global';

import SignIn from './pages/SignIn';
import Teste from './pages/Teste';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyled />
  </>
);

export default App;
