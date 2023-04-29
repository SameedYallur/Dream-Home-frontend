import React from "react";
// import {Table} from 'react-bootstrap/Table';

import { Table } from 'react-bootstrap';

function tab() {
    return (
        <>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Staff No</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>

        </tbody>
      </Table>
      </>
    );
}

export default tab;
