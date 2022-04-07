import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';
import Welcome from '../../pages/Welcome';
import Error from '../Error';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

function Root() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/dasboard/*" element={<Dashboard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" exect element={<Error />} />
      </Routes>
    </div>
  );
}

export default Root;
