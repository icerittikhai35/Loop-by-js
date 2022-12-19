import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  let score = [82, 75, 48, 64, 36];


  //For
  let passedCount = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] > 50) {
      passedCount++;
    }
  }
  console.log(passedCount);


  //For Each
  let passedCount2 = 0;
  score.forEach((score, index) => {
    if (score >= 50) {
      passedCount2++;
    }
  });
  console.log(passedCount2);

  //Map data
  const map1 = score.map(x => x * 2);
  console.log(map1);


  //Filter data
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const resultF = words.filter(word => word.length > 6);
  console.log(resultF);


  //loop object 
  const users = [
    {
      "id": 1,
      "name": "Jon",
      "email": "John@gmail.com"
    },
    {
      "id": 2,
      "name": "Sam",
      "email": "Sam@gmail.com"
    },
    {
      "id": 3,
      "name": "Dan",
      "email": "Dan@gmail.com"
    }
  ];

  const output = users.map(({ id, name, email }) => {
    return <div>
      <h3>ID: ${id} </h3>
      <h3>Name: ${name}</h3>
      <h3>Email: ${email}</h3>
    </div>
  });



  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Loop in JavaScript</h1>
      <h2>core = [82, 75, 48, 64, 36]</h2>
      <h2>Loop For = {passedCount}</h2>
      <h2>Loop ForEach = {passedCount2}</h2>
      <h2>Loop Map = {map1 + ''}</h2>
      <h2>Loop Filter = {resultF + ' '}</h2>
      {output}

    </div>
  )
}

export default App
