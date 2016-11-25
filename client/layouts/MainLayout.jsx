import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';

export const MainLayout = ({content}) => (
  <div>
    <Navbar />
    <main>
      {content}
    </main>
  </div>
)
