import { useState, useEffect } from "react";

export default function Uploader() {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const u = files.map(f => URL.createObjectURL(f));
    setUrls(u);
    return () => u.forEach(URL.revokeObjectURL);
  }, [files]);

  return (
     <div className="library-container">
    <div onClick={() => document.querySelector(".book-field").click()}>
      <h2 style={{color:"white"}}>Click to upload PDF</h2>

      <input
        type="file"
        accept=".pdf"
        className="book-field"
        onChange={e => setFiles([...files, e.target.files[0]])}
      />
    
      <div className="file-container">
        {files.map((f, i) => (
          <div key={f.name} className="file-item">
            <a href={urls[i]} target="_blank">{f.name}</a>
            <button onClick={e => {
              e.stopPropagation();
              setFiles(files.filter(x => x.name !== f.name));
            }}>🗑️</button>
          </div>
        ))}
      </div>
      </div>
    </div>
   
  );
}