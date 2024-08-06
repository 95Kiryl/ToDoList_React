import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<h1>React Router</h1>} />
          <Route path='about' element={<h1>about</h1>} />
          <Route path='contacts' element={<h1>contacts</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
