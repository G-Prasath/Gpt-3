import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Create from './screens/create/Create';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
