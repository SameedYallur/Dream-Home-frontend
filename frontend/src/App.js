import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Branch from './pages/branchForm/branch';
import Home from './pages/home/home';
import Staff from './pages/staff/staff';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/branch" element={<Branch />}/>
        <Route path="/staff" element={<Staff />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
