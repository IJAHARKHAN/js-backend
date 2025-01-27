import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])




  useEffect(() => {
    
    // Make a request for a user with a given ID
// axios.get('http://localhost:3000/api/jokes')
axios.get('/api/jokes')
.then( (response) => {
  // handle success
  // console.log('response', response);
  setjokes(response.data)
})
.catch((error) => {
  // handle error
  console.log('error', error);
})
.finally( () => {
  // always executed
}
);
    
  })
  

  return (
    <>
      <h1>Learn JS Fullstack</h1>
      <h3>Jokes: {jokes.length}</h3>

      <ul>
        {jokes.map((item) => (
          <li key={item.id}>
            <b className="title">{item.title}</b> <br/> 
            <i className="content">{item.content}</i> 
          </li>
        ))}
       
      </ul>
    </>
  )
}

export default App
