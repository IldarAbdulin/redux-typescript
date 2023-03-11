import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { TodoPage } from './pages/TodoPage';
import { UsersPage } from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
