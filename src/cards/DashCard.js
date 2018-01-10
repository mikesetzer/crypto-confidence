import React, { Component } from "react";
 
class DashCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Dash</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default DashCard;
