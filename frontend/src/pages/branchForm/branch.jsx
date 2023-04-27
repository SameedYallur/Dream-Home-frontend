import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"
import "./branch.css"

function Branch() {
  return (    
    <>
    <Navbar />
    <div className='formBranchContainer'>
    <Sidebar />
    <div className='formBranchContainer2'>
    <Form>
    <Form.Group className="mb-3" controlId="formBranchAddress">
    <Form.Label>Branch Address</Form.Label>
    <Form.Control placeholder="Enter Address" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formTelephoneNumber">
    <Form.Label>Telephone Number</Form.Label>
    <Form.Control  placeholder="Enter your Number" />
    </Form.Group>
    </Form>
    <Button variant="outline-primary">Submit</Button>{' '}
    </div>
    </div>
    </>
    );
}

export default Branch;