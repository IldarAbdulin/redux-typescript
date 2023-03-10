import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TodoPage } from './pages/TodoPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
