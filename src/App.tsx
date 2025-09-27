import React from 'react';
import PortfolioApp from './PortfolioApp';
import ServiceApp from './ServiceApp';

function App() {
  const path = window.location.pathname;
  
  // Show portfolio at /mail route, service page at root
  if (path === '/mail') {
    return <ServiceApp />;
  }
  
  return <PortfolioApp />;
}

export default App;