import logo from './logo.svg';
import './App.css';
import MeetOurTeam from './components/MeetOurTeam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element = {<MeetOurTeam/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
