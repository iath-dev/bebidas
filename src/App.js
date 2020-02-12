import React from 'react';
import { Header, Form } from './components';
import { CategoryProvider } from './contexts';

function App() {
  return (
    <CategoryProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoryProvider>
  );
}

export default App;
