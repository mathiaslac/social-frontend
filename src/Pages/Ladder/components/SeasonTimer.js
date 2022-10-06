import { Component } from "react";
import "./css/module.seasonTimer.css";
import Clock from "./hooks/Clock";

class SeasonTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "Oct, 1, 2022" };
  }
  render() {
    return <Clock deadline={this.state.deadline} />;
  }
}

export default SeasonTimer;
