import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import stopwhining from './sounds/stopwhining.mp3';


function StopWhining() {
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
        Stop Whining!
      </div>
      <ReactHowler
        src={stopwhining}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default StopWhining;
