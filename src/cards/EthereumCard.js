import React, { Component } from "react";
 
class EthereumCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Ethereum</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default EthereumCard;
