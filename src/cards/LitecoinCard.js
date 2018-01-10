import React, { Component } from "react";
 
class LitecoinCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Litecoin</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default LitecoinCard;
