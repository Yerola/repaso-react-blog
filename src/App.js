import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio'
import { Crear } from './pages/Crear'

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<Crear setPosts={setPosts} />} />
      </Routes>
    </>
  );
}

export default App;
