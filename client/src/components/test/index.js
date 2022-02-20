import React, { useEffect, useState } from 'react';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []);

  return <div>Hello {name}</div>;
}
