import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import howareyou from './sounds/howareyou.mp3';


function HowAreYou() {
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
        How are you?
      </div>
      <ReactHowler
        src={howareyou}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default HowAreYou;
