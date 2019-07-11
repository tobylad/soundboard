import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import cop from './sounds/cop.wav';


function Cop() {
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
        I'm a cop, you idiot
      </div>
      <ReactHowler
        src={cop}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default Cop;
