import React from 'react';

import { Table, Button } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button data-testid={`delete-button-${item.name}`}>Delete Item</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

export default Items;
