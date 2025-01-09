import {useState,useEffect} from 'react'
import './app.css'
function Counter() {
  const [Count, setCount] =useState(0);
  useEffect(()=> {
    console.log('mounting...');
    console.log('updated to '+Count);
  
    return () => {
      console.log('unmounting.....'+Count);
    }
  }, [Count])
  const addCount=()=>{
    setCount(Count+1);
  }
  const delCount=()=>{
    setCount(Count*0);
    console.clear()
    console.log('cleared current value is '+Count);
    
    
  }
  const minCount=()=>{
    setCount(Count-1);
    console.log('cleared current value is '+Count);
    
  }
  return (
    <div className='counter' >
          <button className='bttn-add show' onClick={addCount}  >add</button>
          <button className='bttn-min show' onClick={minCount}  >minus</button>
          <h1 className='show' >value is {Count} </h1>
          <button className='bttn-del show' onClick={delCount}  >clear value</button>

    </div>
  )
 }
export default Counter


