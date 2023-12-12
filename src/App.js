import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Create from './screens/create/Create';
import Postdetails from './screens/postdetails/Postdetails';
import { Box } from '@mui/material';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path='/post/:id' element={<Postdetails />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
