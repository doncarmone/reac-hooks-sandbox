import React, { useRef } from 'react';

export const UseRefExample = () => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('inputRef', inputRef.current.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
