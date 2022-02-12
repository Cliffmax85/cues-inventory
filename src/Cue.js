import React from 'react';
import { Link } from 'react-router-dom';

export default function Cue({ cue }) {
  return (
    <div className='cue'>
      <Link to={`cues/${cue.id}`}>
        <p>This a {cue.type} shaft made by {cue.brand}</p>
        <p>It was made in {cue.year} and is worth ${cue.cost}</p>
      </Link>
    </div>
  );
}
