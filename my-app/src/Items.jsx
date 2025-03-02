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
        <div className='header'>
            <img src={logo}  style={{maxHeight:"80px",  backgroundColor:"black", borderRadius:"50%"}}></img>
        
        </div>
        <hr style={{height:"1rem", backgroundColor:"purple"}}></hr>
        <br /><br /><br />
        <div className='item-container'>
       
        <Todo />
        <TextEditor />
        <CustomEditor />
        <Schedule/>
      </div>
      <div className="library-container">
        <Uploader />
        </div>

     <h3>:)</h3>
    </>
  );
}
