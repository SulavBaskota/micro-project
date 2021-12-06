import React from 'react';
import Body from './BodyComponent';
import Header from './HeaderComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
    </Fragment>
  );
}

export default App;