import Todo from './Todo';
import TextEditor from './TextEditor';
import CustomEditor from './Achievements';
import Schedule from './Schedule';
import Uploader from './Books';
import { useNavigate } from 'react-router-dom';

import logo from './assets/download.png'

export default function Items() {

    const navigate = useNavigate();
  return (
    <>
      <div className="items">
        <br />
        <div className='header'>
            <img src={logo}  style={{height:"120px",  backgroundColor:"black", borderRadius:"50%"}}></img>
        
        </div>
        <div className='info'>
        <h1 style={{ color: "purple", fontSize: "5rem", fontWeight: "600", textAlign:"center" }}>Start Your Journey</h1>
        <h1 style={{ color: "black", fontWeight: "300", fontSize: "2rem", textAlign:"center"}}>
          <label>How are you feeling today </label>
          <select className="feel" style={{color:"black", backgroundColor:"white"}}>
            <option>😀 Great</option>
            <option>😄 Better</option>
            <option>😊 Good</option>
            <option>🙂 Okay</option>
            <option>🙄 Not Okay</option>
          </select>
        </h1>
        </div>
        <hr style={{height:"1rem", backgroundColor:"purple"}}></hr>
        <br /><br /><br />
        <div className='item-container'>
        <div className="todo">
          <Todo />
        </div>
        <TextEditor />
        <CustomEditor />
        <Schedule/>
      </div>
      <div className="library-container">
        <Uploader />
        </div>
      </div>
     <h3>:)</h3>
    </>
  );
}
