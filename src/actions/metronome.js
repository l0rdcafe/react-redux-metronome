export const SET_BPM_STOPPED = "SET_BPM_STOPPED";
export const SET_BPM_PLAYING = "SET_BPM_PLAYING";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_STOP = "TOGGLE_STOP";
export const SET_COUNT = "SET_COUNT";

export function setBPMStopped(bpm) {
  return {
    type: SET_BPM_STOPPED,
    bpm
  };
}

export function setBPMPlaying(bpm) {
  return {
    type: SET_BPM_PLAYING,
    bpm
  };
}

export function togglePlay() {
  return {
    type: TOGGLE_PLAY
  };
}

export function toggleStop() {
  return {
    type: TOGGLE_STOP
  };
}

export function setCount(count) {
  return {
    type: SET_COUNT,
    count
  };
}
