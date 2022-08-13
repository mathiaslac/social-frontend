import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="head__timer">
        <span>Timer</span>
        <div className="timer-card">
          <img src="assets/img/icons/watch.svg" alt="timer-icons" />
          <div className="timer">
            <p className="days">{this.state.days}D </p>
            <p className="hours">{this.state.hours}H </p>
            <p className="minutes">{this.state.minutes}M </p>
            <p className="seconds">{this.state.seconds}S </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
