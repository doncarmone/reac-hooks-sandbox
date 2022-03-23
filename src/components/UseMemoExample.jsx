import React, { useEffect, useMemo, useRef, useState } from 'react';

export const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  //

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <h3>Renders: {renders.current}</h3>
      <button className='btn-primary' onClick={onClick}>
        ReRender
      </button>
      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>
      <input
        type='number'
        value={number}
        className='form-control w-25'
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log('Expensive Function Called!');
  return Math.sqrt(n);
}
