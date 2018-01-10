import React, { Component } from "react";
 
class CardanoCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Cardano</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default CardanoCard;