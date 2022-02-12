import React from 'react';
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getCueById } from './services/fetch-utils';

export default function DetailPage() {
  const [cue, setCue] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const data = await getCueById(match.params.id);
      setCue(data);
    }
    fetch();
  }, [match.params.id]);

  return (
    <div className='cue-detail'>
      <h2>This is a {cue.brand} the shaft is made of {cue.type}.</h2>
      <h3>It was made in {cue.year} and is worth about {cue.cost}</h3>
    </div>
  );
}
