import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'
import { Navbar, Header } from './components'
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Header />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
