import React, { useRef } from "react";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const editorRef = useRef(null);

  // Function to execute formatting commands
  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  const handleLink = () => {
    const url = prompt("Enter the URL:", "https://");
    if (url) {
      document.execCommand("createLink", false, url);
    }
  };

  return (
    <div className="rich-text-editor">
      <div className="toolbar">
        <button onClick={() => handleCommand("bold")}>
          <b>B</b>
        </button>
        <button onClick={() => handleCommand("italic")}>
          <i>I</i>
        </button>
        <button onClick={() => handleCommand("underline")}>
          <u>U</u>
        </button>
        <button onClick={() => handleCommand("strikeThrough")}>S</button>
        <button onClick={() => handleCommand("justifyLeft")}>
          <i class="bi bi-quote"></i>
        </button>
        <button onClick={() => handleCommand("justifyCenter")}>
          <i class="bi bi-code-slash"></i>
        </button>
        <button onClick={() => handleCommand("justifyRight")}>
          <i class="bi bi-list-ol"></i>
        </button>
        <button onClick={() => handleCommand("insertOrderedList")}>
          <i class="bi bi-list-ul"></i>
        </button>
        <button onClick={() => handleCommand("insertUnorderedList")}>
          <select className="heading-size">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="7">Normal</option>
          </select>
        </button>

        <button onClick={handleLink}>Link</button>
        <button onClick={() => handleCommand("unlink")}>Unlink</button>
      </div>
      <div
        className="editor"
        contentEditable
        ref={editorRef}
        suppressContentEditableWarning={true}
      >
        Start typing here...
      </div>
    </div>
  );
};

export default RichTextEditor;
