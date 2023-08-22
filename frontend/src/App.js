import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRef} from 'react'
import { Home } from './pages/index'
import { Navbar } from './components'
import { Header, Exercise, GetStarted } from './containers/imports'
import './App.css'

function App() {

  const exerciseRef = useRef(null)
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Header />
      <div>
      <div>
        <Exercise exerciseRef={exerciseRef} />
        <GetStarted />
      </div>
     {/*<Routes>
        <Route path="/" element={<Home />} />
      </Routes>*/}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
