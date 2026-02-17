import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Thoughts({ currentDate }) {
  const key = `thoughts:${currentDate}`;
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setContent(saved || "");
  }, [key]);

  return (
    <div className="thoughts">
      <h2>Thoughts</h2>

      <div className="editor-wrapper">
        <ReactQuill
          value={content}
          onChange={(v) => {
            setContent(v);
            localStorage.setItem(key, v);
          }}
          placeholder="Write freely…"
        />
      </div>
    </div>
  );
}