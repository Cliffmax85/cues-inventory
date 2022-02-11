import React from 'react';
import { useState } from 'react';
import { createCue } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreateCuePage() {
  const history = useHistory();
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [cost, setCost] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    await createCue({
      type,
      brand,
      year,
      cost,
    });
    history.push('/cues');
  }


  return (
    <div>\\\\\\CREATE_A_CUE////////
      <form onSubmit={handleSubmit}>
        <label>
            Cue type
          <input required value={type} onChange={e => setType(e.target.value)} name='type' />
        </label>
        <label>
            Cue brand
          <select required value={brand} onChange={e => setBrand(e.target.value)}>
            <option>Meucci</option>
            <option>Predator</option>
            <option>Mezz</option>
            <option>OB</option>
          </select>
        </label>
        <label>
            Year Made
          <input required value={year} onChange={e => setYear(e.target.value)} name='year' />
        </label>
        <input required value={cost} onChange={e => setCost(e.target.value)} name='cost' />
      </form>
    </div>
  );
}
