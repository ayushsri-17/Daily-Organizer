import { useState, useEffect } from "react";

export default function Uploader() {
    const [files, setFiles] = useState([]); // Array to hold uploaded files
    const [fileUrls, setFileUrls] = useState([]); // Array to hold file URLs

    const handleFileChange = ({ target: { files } }) => {
        if (files.length > 0) {
            // Add the new file to the existing array
            setFiles(prevFiles => [...prevFiles, files[0]]);
        }
    };

    const handleRemoveFile = (event, fileName) => {
        event.stopPropagation(); // Prevent the click from bubbling up
        // Remove the selected file from the array
        setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    // Create object URLs for the files
    useEffect(() => {
        const urls = files.map(file => URL.createObjectURL(file));
        setFileUrls(urls);

        // Cleanup function to revoke object URLs
        return () => {
            urls.forEach(url => URL.revokeObjectURL(url));
        };
    }, [files]);

    return (
        <>
            <div onClick={() => document.querySelector(".book-field").click()}>
                <h2 style={{ color: "purple", textAlign: 'center', marginTop:"5rem" }}>Click here to upload</h2>
                <input 
                    type="file" 
                    accept=".pdf" // Accept only PDF files
                    className="book-field" 
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // Hide input field
                />
                <section>
                    {files.length === 0 ? (
                        <span><h1 style={{color: "grey",textAlign: 'center', fontSize:"2rem", marginTop:"4rem"}}>No Docs :(</h1></span>
                    ) : (
                        <div className="file-container">
                            {files.map((file, index) => (
                                <div key={file.name} className="file-item">
                                    <a 
                                        href={fileUrls[index]} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling
                                        style={{ textDecoration: 'underline', color: '#4518da' }} // Style for link
                                    >
                                        {file.name}
                                    </a>
                                    <button 
                                        onClick={(event) => handleRemoveFile(event, file.name)} 
                                        style={{ marginLeft: '10px' }}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
