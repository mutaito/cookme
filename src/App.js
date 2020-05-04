import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AppRouter from './router/AppRouter';

function App() {
  return (   
      <div className="container">
        <AppRouter />
      </div>
  );
}
export default App;