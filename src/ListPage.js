import React, { useEffect, useState } from 'react';
import { getCues } from './services/fetch-utils';
import Cue from './Cue';

export default function ListPage() {
  const [cues, setCues] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getCues();
      setCues(data);  
    }
    fetch();
  }, []);
  
  return (
    <div className='cues-list'>
      {
        cues.map(cue => <Cue key={cue.id} cue={cue} />)  
      }
    </div>
  );
}
