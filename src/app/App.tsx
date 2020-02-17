import React from 'react';
import routes from './routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { renderRoute } from './core';

/**
 * shared
 */
import Footer from './shared/components/footer';
import Header from './shared/components/header';
import Body from './shared/components/body';
import ButtonPlay  from './shared/components/button-play';

const App = () => {
  return (
    <div>
      <Header />
      <Body>
        <Router>
          {renderRoute(<Route />, routes)}
        </Router>
      </Body>
      <ButtonPlay/>
      <Footer />
    </div>
  );
}

export default App;
