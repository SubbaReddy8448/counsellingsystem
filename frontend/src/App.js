import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Visitor from './Components/Visitor';
import Counsellor from './Components/Counsellor';
import  Appointment  from './Components/Appointment';
import Home from './Components/Home';

function App() {
  
  const post = {
    title: 'Dynamic Content Example',
    content: 'This is a sample post with dynamic content and props.',
    author: 'John Doe',
    date: '2024-01-04',
  };

  return (
    <React.Fragment>
      {/* Header component for navigation */}
      <Header />

      <main>
        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/SignUp" element={<SignUp />} exact />
          <Route path="/SignIn" element={<SignIn />} exact />
          <Route path="/Visitor" element={<Visitor />} exact />
          <Route path="/Counsellor" element={<Counsellor />} exact />
          <Route path="/Appointment" element={<Appointment />} exact />
          
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

