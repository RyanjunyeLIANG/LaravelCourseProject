import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TopNav from './TopNav';
import Routes from './Routes';

export default function Shell() {
  return (
    <Router>
      <div>
        <TopNav />
        <main className="container">
          <Routes />
        </main>
      </div>
    </Router>
  );
}
