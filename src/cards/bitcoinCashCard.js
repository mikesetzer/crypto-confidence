import React, { Component } from "react";
 
class BitcoinCashCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Bitcoin Cash</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default BitcoinCashCard;