
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import Table from '../helpers/Table';
import Display_fields from '../components/staff_textfields'

function App() {
  return (
    <>
      {/* <Container> */}
      <Navbar/>
        <Row>
          <Col sm={3}>
            <Sidebar style = {{paddingRight: 0,MarginRight: 0}} />
          </Col>
          <Col sm={9}>
            <Display_fields/>
            <Table style = {{paddingLeft: 0,MarginLeft: 0}} />
          </Col>
        </Row>
      {/* </Container> */}
    </>
  );
}

export default App;




// import Table from 'react-bootstrap/Table';
// import { Container, Row, Col } from 'react-bootstrap';

// import Sidebar from '../components/Sidebar';


// function DarkExample() {
//   return (
//     <Row>
//     <Sidebar/>
    
//     </Row>
//   );
// }

// export default DarkExample;