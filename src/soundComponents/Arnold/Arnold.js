import React from 'react';
import NoProblemo from './NoProblemo';
import Cop from './Cop';
import Daddy from './Daddy';
import Discipline from './Discipline';
import DoItNow from './DoItNow';
import HowAreYou from './HowAreYou';
import IllBeBack from './IllBeBack';
import No from './No';
import Questions from './Questions';
import StopWhining from './StopWhining';
import Yeah from './Yeah';
import Yes from './Yes';

function Arnold() {
  return (
    <div className="container">
      <div className="row">
        <h3>Arnold Schwarzenegger</h3>
      </div>

      <div className="row">
        <Yes />
        <Yeah />
        <No />
        <NoProblemo />
        <DoItNow />
        <HowAreYou />
        <StopWhining />
        <Discipline />
        <IllBeBack />
        <Cop />
        <Questions />
        <Daddy />
      </div>
    </div>
  );
}

export default Arnold;