import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/test')
      .then(function (res) {
        console.log('get请求', res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
    axios
      .post('http://localhost:4000/test')
      .then(function (res) {
        console.log('post请求', res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);

  return <div>Hello {name}</div>;
}
