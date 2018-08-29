import { SET_BPM_STOPPED, SET_BPM_PLAYING, TOGGLE_PLAY, TOGGLE_STOP, SET_COUNT } from "../actions/metronome";

const initialState = {
  playing: false,
  count: 0,
  bpm: 100,
  beatsPerMeasure: 4
};

function metronome(state = initialState, action) {
  switch (action.type) {
    case SET_BPM_STOPPED:
      console.log(state);
      return {
        ...state,
        bpm: action.bpm
      };
    case SET_BPM_PLAYING:
      return {
        ...state,
        count: 0,
        bpm: action.bpm
      };
    case TOGGLE_STOP:
      return {
        ...state,
        playing: false
      };
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: true,
        count: 0
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.count
      };
    default:
      return state;
  }
}

export default metronome;
