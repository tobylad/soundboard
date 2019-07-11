import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import questions from './sounds/arnoldquestions.mp3';


function Questions() {
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
        Questions
      </div>
      <ReactHowler
        src={questions}
        playing={playing}
        seek={seek}
        onEnd={reset}
      />
    </div>
  );
}

export default Questions;
