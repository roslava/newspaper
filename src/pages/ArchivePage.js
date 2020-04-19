import React from 'react';
import IssueCover from '../components/allIssueDisplay/IssueCover';
import Data from '../components/allIssueDisplay/issueData';


function All() {
  return (
    <div>
      <h1>Все выпуски</h1>
      <IssueCover data = {Data} />
    </div>
  );
}

export default All;
