import React from 'react';
import { Header, Form, DrinksList } from './components';
import { CategoryProvider, RecipesProvider, ModalProvider } from './contexts';

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <DrinksList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
