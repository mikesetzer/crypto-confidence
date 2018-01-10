import React, { Component } from "react";

import BitcoinCard from "./cards/BitcoinCard";
import EthereumCard from "./cards/EthereumCard";
import RippleCard from "./cards/RippleCard";
import BitcoinCashCard from "./cards/BitcoinCashCard";
import CardanoCard from "./cards/CardanoCard";
import LitecoinCard from "./cards/LitecoinCard";
import DashCard from "./cards/DashCard";
import MoneroCard from "./cards/MoneroCard";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div className="cards">

          <div className="cryptocard">
            <BitcoinCard />
          </div>
          <div className="cryptocard">
            <EthereumCard />
          </div>
          <div className="cryptocard">
            <RippleCard />
          </div>
          <div className="cryptocard">
            <BitcoinCashCard />
          </div>
          <div className="cryptocard">
            <CardanoCard />
          </div>
          <div className="cryptocard">
            <LitecoinCard />
          </div>
          <div className="cryptocard">
            <DashCard />
          </div>
          <div className="cryptocard">
            <MoneroCard />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;
