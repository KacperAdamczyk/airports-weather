import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { Dashboard } from 'pages/Dashboard/Dashboard';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
