import React from 'react';
import { Header, Form } from './components';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
