import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    let items = this.props.items;
    console.log(items);
    if (items.length) {
      let rows = this.props.items.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.address}</td>
          </tr>
        )
      });
      return (
        <table className="table">
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
          </tr>
          <tbody>
          {rows}
          </tbody>
        </table>
      );
    }
    else return (
      <div className="u-italics"> No location selected </div>
    );
  }

  render() { return this.renderItems(); }
}
