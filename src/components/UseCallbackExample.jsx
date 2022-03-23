import React, { useCallback, useState } from 'react';

export const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);
  const addTasks = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, setTasks);

  return (
    <div>
      <Button addTasks={addTasks} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTasks }) => {
  console.log('Btn Rendered');

  return (
    <div>
      <button onClick={addTasks}>Add Tasks</button>
    </div>
  );
});
