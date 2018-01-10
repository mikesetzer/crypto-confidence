import React, { Component } from "react";
 
class RippleCard extends Component {
  render() {
    return (
      <div class="card">
        <h2>Ripple</h2>
        <p>Price: $4.20</p>
        <p className="sentiment">Sentiment: Good</p>
      </div>
    );
  }
}
 
export default RippleCard;