import React from 'react';
import Header from './Header';

// Functional component because only showing header and children
const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
