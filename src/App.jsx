import { useState } from 'react'
import './App.css'
import DropdownComponent from './components/DropDown';
function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h1 className=' text-center  text-3xl '>Create your Dungeons and Dragons Character</h1>
      <button className='button   rounded-xl ' onClick={(event)=>setCount(1)}>Show party</button>
      <div>
        {count?<p className=' text-md text-red-600'>go create a party first....</p>:''}
      </div>
    </div>
  );
}

export default App
