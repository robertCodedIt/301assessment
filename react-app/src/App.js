import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  }
  
  // deleteItem= async(id)=>{
  //   await axios.delete(`${API_SERVER}/items/`,{params:{_id:id}})
  //     .then(res => {
  //       console.log(res.json(i));
      
  
  //       const item = this.state.items.filter(item => item._id !== id);
  //       this.setState({ item });
  //     })
  
  // }
deleteItem = async (id)=>{  await axios.delete(`${API_SERVER}/items/${id}`, (req,) => {
    id = parseFloat(req.params.id);
  const items = this.state.items.filter(item => item._id !== id);
  this.setState({ items });
  })}
  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items itemsList={this.state.items} delete = {this.deleteItem} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
