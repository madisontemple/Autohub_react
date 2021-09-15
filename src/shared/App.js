import React, { Component, useState } from "react";
import styled from "styled-components";
import Search from "../icon/search-solid.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import "../index.css";
import { Home, Buy, Sell, Managed, CCenter, Join, Login } from "../pages";
import { SearchResult, Hyundai, Kia, Benz, Bmw, Genesis } from "../pages";
import { Shop1, Shop2, Shop3, Shop4 } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Buy" component={Buy} />
        {/* <Route path="/Sell" component={Sell} /> */}
        <Route path="/Managed" component={Managed} />
        <Route path="/CCenter" component={CCenter} />
        <Route path="/Join" component={Join} />
        <Route path="/Login" component={Login} />

        <Route path="/SearchResult" component={SearchResult} />
        <Route path="/Hyundai" component={Hyundai} />
        <Route path="/Kia" component={Kia} />
        <Route path="/Benz" component={Benz} />
        <Route path="/Bmw" component={Bmw} />
        <Route path="/Genesis" component={Genesis} />

        <Route path="/Shop1" component={Shop1} />
        <Route path="/Shop2" component={Shop2} />
        <Route path="/Shop3" component={Shop3} />
        <Route path="/Shop4" component={Shop4} />
      </div>
    );
  }
}

export default App;
