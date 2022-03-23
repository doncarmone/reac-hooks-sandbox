import React, { useEffect, useRef, useState } from 'react';

export const UseRefExample2 = () => {
  const renders = useRef(1);
  const [name, setName] = useState('');
  const prevName = useRef('');
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h1>Prev name State: {prevName.current}</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />
    </div>
  );
};
