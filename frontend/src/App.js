import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';

import Staff from './pages/staff';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        {/* <Switch> */}
          {/* <Route exact path="/staff" component={Staff} /> */}
          <Staff/>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
