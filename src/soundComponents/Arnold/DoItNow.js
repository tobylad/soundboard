import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import doitnow from './sounds/doitnow.mp3';


function DoItNow() {
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
        Do it now
      </div>
      <ReactHowler
        src={doitnow}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default DoItNow;
