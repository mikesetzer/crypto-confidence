import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import bitcoin from "./currency/bitcoin";
import ethereum from "./currency/ethereum";
import ripple from "./currency/ripple";
import bitcoinCash from "./currency/bitcoinCash";
import cardano from "./currency/cardano";
import litecoin from "./currency/litecoin";
import dash from "./currency/dash";
import monero from "./currency/monero";
 
class Main extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <h1>Cryptocurrency Social Sentiment Score</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/currency/bitcoin">Bitcoin</NavLink></li>
            <li><NavLink to="/currency/ethereum">Ethereum</NavLink></li>
            <li><NavLink to="/currency/ripple">Ripple</NavLink></li>
            <li><NavLink to="/currency/bitcoinCash">Bitcoin Cash</NavLink></li>
            <li><NavLink to="/currency/cardano">Cardano</NavLink></li>
            <li><NavLink to="/currency/litecoin">Litecoin</NavLink></li>
            <li><NavLink to="/currency/dash">Dash</NavLink></li>
            <li><NavLink to="/currency/monero">Monero</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/currency/bitcoin" component={bitcoin}/>
             <Route path="/currency/ethereum" component={ethereum}/>
             <Route path="/currency/ripple" component={ripple}/>
             <Route path="/currency/bitcoinCash" component={bitcoinCash}/>
             <Route path="/currency/cardano" component={cardano}/>
             <Route path="/currency/litecoin" component={litecoin}/>
             <Route path="/currency/dash" component={dash}/>
             <Route path="/currency/monero" component={monero}/>
          </div>
        </div>
      </HashRouter>

    );
  }
}
 
export default Main;