import React, { useState } from 'react';

const INITIAL_LIST = [
  {
    id: 0,
    title: "Hello world"
  },
  {
    id: 1,
    title: "Hello hooks"
  }
];

export default function App() {
  const [list, setList] = useState(INITIAL_LIST);

  function onRemoveList(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          &nbsp;
          <button type="button" onClick={() => onRemoveList(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}