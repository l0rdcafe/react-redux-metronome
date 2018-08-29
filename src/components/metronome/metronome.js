import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { togglePlay, toggleStop, setBPMPlaying, setBPMStopped, setCount } from "../../actions/metronome";
import "./metronome.css";
import click1 from "../../audio/click1.wav";
import click2 from "../../audio/click2.wav";

class Metronome extends React.Component {
  constructor(props) {
    super(props);

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }
  handleBpmChange = e => {
    const bpm = e.target.value;
    const { playing } = this.props.state.metronome;

    if (playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      this.props.dispatch(setBPMPlaying(bpm));
    } else {
      this.props.dispatch(setBPMStopped(bpm));
    }
  };
  playClick = () => {
    const { count, beatsPerMeasure } = this.props.state.metronome;

    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    this.props.dispatch(setCount((count + 1) % beatsPerMeasure));
  };
  startStop = () => {
    const { playing, bpm } = this.props.state.metronome;
    if (playing) {
      clearInterval(this.timer);
      this.props.dispatch(toggleStop());
    } else {
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      this.props.dispatch(togglePlay());
      this.playClick();
    }
  };
  render() {
    console.log(this.props.state);
    const { playing, bpm } = this.props.state.metronome;
    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange} />
        </div>
        <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

Metronome.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    metronome: PropTypes.shape({
      beatsPerMeasure: PropTypes.number,
      bpm: PropTypes.number,
      count: PropTypes.number,
      playing: PropTypes.bool
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Metronome);
