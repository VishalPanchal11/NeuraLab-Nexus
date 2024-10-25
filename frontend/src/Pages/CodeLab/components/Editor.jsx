import { useEffect } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";


const ACTIONS = {
  JOIN: "join",
  JOINED: "joined",
  DISCONNECTED: "disconnected",
  CODE_CHANGE: "code-change",
  SYNC_CODE: "sync-code",
  LEAVE: "leave",
};

const Editor = ({ socketRef, roomId, language, onCodeChange, editorRef }) => {
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor; // Assign editor instance to the ref
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.onDidChangeModelContent(() => {
        const code = editorRef.current.getValue();
        onCodeChange(code);
        socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
      });
    }

    const currentSocket = socketRef.current; // Capture the current value of socketRef

    if (currentSocket) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null && editorRef.current.getValue() !== code) {
          editorRef.current.setValue(code);
        }
      });
    }

    return () => {
      if (currentSocket) {
        currentSocket.off(ACTIONS.CODE_CHANGE);
      }
    };
  }, [socketRef.current, roomId, language]);

  return (
    
    <div style={{ height: "75vh" }}>
      <MonacoEditor
        height="100%"
        theme="vs-dark"
        language={language}
        defaultValue={"// Start coding..."}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default Editor;
