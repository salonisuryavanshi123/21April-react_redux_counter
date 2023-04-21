//1. Import Area
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddByOne, Reset, SubtractByOne } from './_actionCreators';

//2. Defination Area
function App() {
  //2.1 Hooks Area
  let storeObject = useSelector(storeObject=> storeObject)
  let dispatch = useDispatch()
  //2.2 Function Defination Area

  //2.3 Return Statement
  return (
    <>
      {console.log(storeObject)}
      <h1 style={{textAlign:"center"}} >{storeObject.value}</h1>
      <div style={{textAlign:"center"}}>
        <button onClick={()=>{ dispatch(AddByOne()) }} style={{width:"50px",padding:"10px",borderRadius:"8px",fontSize:"25px"}}>+</button>
        <button onClick={()=>{ dispatch(Reset()) }} style={{width:"150px",padding:"10px",borderRadius:"8px",fontSize:"25px",marginLeft:"10px",marginRight:"10px"}}>Reset</button>
        <button onClick={()=>{ dispatch(SubtractByOne()) }} style={{width:"50px",padding:"10px",borderRadius:"8px",fontSize:"25px"}}>-</button>
      </div>
    </>
  );
}

//3. Export Area
export default App;
