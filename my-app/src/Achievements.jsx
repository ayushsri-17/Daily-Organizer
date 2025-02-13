import { useState, useEffect } from 'react';
import Editor from 'react-simple-wysiwyg';
import {  EditorProvider} from 'react-simple-wysiwyg'

export default function CustomEditor() {

  const [value, setValue] = useState('');
 
  // Load content from local storage on component mount
  useEffect(() => {
    const storedContent = localStorage.getItem('value');
    if (storedContent) {
      setValue(storedContent);
    }
  }, []);

  const handleProcedureContentChange = (content) => {
    setValue(content); // Update state on content change
  };

  const saveContent = () => {
    localStorage.setItem('value', value);
    alert('Content saved!'); // Optional: alert to confirm save
  };


  return (
    <>
    <div className='achievements-container'>
    <h2 style={{ color: 'purple', fontSize: '2.5rem'}}>Your Achievements</h2>
    <EditorProvider>
        <div className='text-area'>
      <Editor value={value} onChange={e=> handleProcedureContentChange(e.target.value)}/>
      </div>
    </EditorProvider>
    <button className='save-button' onClick={saveContent} style={{ marginLeft: '12rem', padding: '10px 20px', fontSize: '1rem', borderRadius:'15px', border:'none', cursor:'pointer', color:"purple"}}>Save</button>
    </div>
    </>
  );
}