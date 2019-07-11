import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import illbeback from './sounds/illbeback.mp3';


function IllBeBack() {
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
        I'll be back
      </div>
      <ReactHowler
        src={illbeback}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default IllBeBack;
