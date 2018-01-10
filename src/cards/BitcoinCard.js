import React, { Component } from "react";
 
class BitcoinCard extends Component {
  render() {
    return (
      <div className="card">
        <h2>Bitcoin</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default BitcoinCard;
