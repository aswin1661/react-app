import './app.css';
import {useState} from 'react'
import Counter from './counter'
function App() {
  
  const [State, setState] = useState(false)
  const [Style, setStyle] = useState('show-btn default')
  const changeStyle=()=>{
    if(Style!=='show-btn default')
      setStyle('show-btn default');
    else setStyle('show-btn clicked');
    setState(!State);
  }

  return (
    <div className='main' >
      <button id='btnn' className={Style} onClick={changeStyle} >show/hide</button>
      {State&& <Counter />}
    </div>
  )
}

export default App



