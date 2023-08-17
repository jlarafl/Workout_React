import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'
import { Navbar} from './components'
import { Header, Excercizes } from './containers/imports'
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Header />
      <div>
      <div>
        <Excercizes />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
