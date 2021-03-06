import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('/api/values').then(res => {
      console.log('response : ', res);
      setLists(res.data);
    });
  }, []);

  const changeHandler = e => {
    setValue(e.currentTarget.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    axios.post('/api/values', { value }).then(res => {
      if (res.data.success) {
        console.log('값 입력 성공: ', res);
        setLists([...lists, res.data]);
        setValue('');
      } else {
        alert('값을 넣는데 실패했습니다.');
        console.log('값을 넣는데 실패했습니다.');
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <ul>
            {lists && lists.map((list, index) => (
              <li key={index}>{list.value}</li>
            ))}
          </ul>
          <form className="example" onSubmit={submitHandler}>
            <input type="text" placholder="입력해주세요" value={value} onChange={changeHandler} />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
