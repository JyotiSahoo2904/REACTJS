import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Table,Col,Row,Button} from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import CalenderControl from './Components/CalenderControl/CalenderControl';
 
class Test extends Component {
  render() {
    return (
        <Container>
 <form>
    <div className="form-row">
    <div className="col-1">
      <label className="my-1 mr-2" >Asset : </label>
    </div>
    <div className="col-1">
      <input type="text" className="form-control input-sm" placeholder="Asset"/>
    </div>
    <div className="col-1"> 
    <button className="btn btn-primary" type="submit">Button</button>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="State"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Zip"/>
    </div>
    <div>
      <CalenderControl />
    </div>

    </div>
</form>        
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input"/>
<input class="btn btn-primary" type="submit" value="Submit"/>
<input class="btn btn-primary" type="reset" value="Reset"/>
      </Container>
    );
  }
}
 
export default Test;