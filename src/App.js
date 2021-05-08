import React from 'react';
import './App.scss';

import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/opportunities' component={Opportunities} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/contact-us' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Ovo je neki tekst.</p>;
}

function Solutions() {
  return <p>Ovo je drugi tekst za drug ustranicu.</p>;
}

function Contact() {
  return <p>Ovo je test za kontakt.</p>;
}

function Home() {
  return (
    <div className='container hero'>
      <div className='wrapper'>
        <h5>
          The <b>BuildIT</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default App;
