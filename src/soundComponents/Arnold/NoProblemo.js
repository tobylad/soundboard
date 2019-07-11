import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import noProblemo from './sounds/problemo.mp3';


function NoProblemo() {
  const [playing, setPlaying] = useState(false);
  const [seek, setSeek] = useState(0);

  const play = () => {
    setPlaying(true);
  }

  const reset = () => {
    setPlaying(false);
    setSeek(0);
  }

  return (
    <div onClick={play} className="col-6 col-lg-3">
      <div className="sound-tile">
        No Problemo
      </div>

      <ReactHowler
        src={noProblemo}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default NoProblemo;
