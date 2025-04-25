
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './components/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Letra1 from './components/musica1';
import Letra2 from './components/musica2';
import Letra3 from './components/musica3';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/letras/1" element={<Letra1 />} />
          <Route path="/letras/2" element={<Letra2/>} />
          <Route path="/letras/3" element={<Letra3/>} />
          <Route path="/contact" element={<h1>Contato</h1>} />
        </Routes>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
