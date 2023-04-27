import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Branch from './pages/branchForm/branch';
import Home from './pages/home/home';
import Staff from './pages/staff/staff';
import Client from './pages/client/client';
import PropertyForRent from './pages/propertyForRent/propertyForRent';
import PrivateOwner from './pages/privateOwner/privateOwner';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/branch" element={<Branch />}/>
        <Route path="/staff" element={<Staff />}/>
        <Route path="/client" element={<Client />}/>        
        <Route path="/propertyForRent" element={<PropertyForRent/>}/>
        <Route path="/privateOwner" element={<PrivateOwner/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
