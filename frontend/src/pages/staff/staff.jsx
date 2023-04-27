import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"

function Staff() {
  return (
    <>
    <Navbar />
    <div className='formBranchContainer'>
    <Sidebar />
    <div className='formBranchContainer2'>
    <Form>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFname">
    <Form.Label>First Name</Form.Label>
    <Form.Control  placeholder="Enter First Name" />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridLname">
    <Form.Label>Last Name</Form.Label>
    <Form.Control  placeholder="Enter Last Name" />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col}controlId="formGridDOB">
    <Form.Label>DOB</Form.Label>
    <Form.Control type="date"  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridSex">
    <Form.Label>Sex</Form.Label>
    <Form.Control placeholder="Gender" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPOS">
    <Form.Label>Position</Form.Label>
    <Form.Control placeholder="Position" />
    </Form.Group>
    </Row>
    
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridSalary">
    <Form.Label>Salary</Form.Label>
    <Form.Control placeholder="Salary" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridManagerBonus">
    <Form.Label>Manager Bonus</Form.Label>
    <Form.Control placeholder="Manager Bonus" />
    </Form.Group>
    </Row>
    
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridBrachNo">
    <Form.Label>Branch Number</Form.Label>
    <Form.Select defaultValue="Choose...">
    <option>Choose...</option>
    <option>...</option>
    </Form.Select>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridSupervisorNo">
    <Form.Label>Supervisor No.</Form.Label>
    <Form.Select defaultValue="Choose...">
    <option>Choose...</option>
    <option>...</option>
    </Form.Select>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridManagerDate">
    <Form.Label>Manager Date</Form.Label>
    <Form.Control type="date" />
    </Form.Group>
    </Row>
    
    <Button variant="primary" type="submit">
    Submit
    </Button>
    </Form>
    </div>
    </div>
    </>
    );
}

export default Staff;