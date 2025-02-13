import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Make sure to import the CSS

const YourComponent = () => {
  const [editorContent, setEditorContent] = useState(''); // State to hold editor content

  const handleProcedureContentChange = (content) => {
    setEditorContent(content); // Update state on content change
  };

  // Load content from local storage on component mount
  useEffect(() => {
    const storedContent = localStorage.getItem('editorContent');
    if (storedContent) {
      setEditorContent(storedContent);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to save content to local storage
  const saveContent = () => {
    localStorage.setItem('editorContent', editorContent);
    alert('Content saved!'); // Optional: alert to confirm save
  };

  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  const formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  return (
    <div className='thought-container'>
      <h1 id='title' style={{ textAlign: "center", color: "purple", fontSize: "2.7rem"}}>Your Thoughts</h1>
      <div className='text-container' style={{ display: "grid", justifyContent: "center" }}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Organize your thoughts ...."
          onChange={handleProcedureContentChange}
          style={{ height: "270px" }}
          value={editorContent} // Set the editor value to state
        />
      </div>
      <button className='save-button' onClick={saveContent} style={{ marginLeft: '12rem', padding: '10px 20px', fontSize: '1rem', borderRadius:'15px', border:'none', cursor:'pointer', color:"purple" }}>Save</button>
    </div>
  );
};

export default YourComponent;
