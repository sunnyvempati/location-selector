import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  renderItems() {
    let items = this.state.items;
    if (items.length) {
      let rows = this.state.items.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.location}</td>
          </tr>
        )
      });
      return (
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          {rows}
        </table>
      );
    }
    else return (
      <h3> No location selected </h3>
    );
  }

  render() {
    return this.renderItems();
  }
}
