import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

const ACTIONS = {
  JOIN: "join",
  JOINED: "joined",
  DISCONNECTED: "disconnected",
  CODE_CHANGE: "code-change",
  SYNC_CODE: "sync-code",
  LEAVE: "leave",
};

const Editor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Monaco environment configuration to handle Web Workers
    window.MonacoEnvironment = {
      getWorker: function (workerId, label) {
        switch (label) {
          case "json":
            return new Worker(
              new URL(
                "monaco-editor/esm/vs/language/json/json.worker",
                import.meta.url
              )
            );
          case "css":
          case "scss":
          case "less":
            return new Worker(
              new URL(
                "monaco-editor/esm/vs/language/css/css.worker",
                import.meta.url
              )
            );
          case "html":
          case "handlebars":
          case "razor":
            return new Worker(
              new URL(
                "monaco-editor/esm/vs/language/html/html.worker",
                import.meta.url
              )
            );
          case "typescript":
          case "javascript":
            return new Worker(
              new URL(
                "monaco-editor/esm/vs/language/typescript/ts.worker",
                import.meta.url
              )
            );
          default:
            return new Worker(
              new URL(
                "monaco-editor/esm/vs/editor/editor.worker",
                import.meta.url
              )
            );
        }
      },
    };
    

    // Initialize Monaco editor
    editorRef.current = monaco.editor.create(
      document.getElementById("monaco-editor"),
      {
        value: "// Start coding...",
        language: "javascript",
        theme: "vs-dark", // Provide a way to switch themes
        lineNumbers: "on", // Optional
        fontSize: 14, // Allow users to adjust this
      }
    );

    // Handle changes in the code editor
    editorRef.current.onDidChangeModelContent(() => {
      const code = editorRef.current.getValue();
      console.log("Emitting CODE_CHANGE:", code); // Log the code being emitted
      onCodeChange(code);
      socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
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
  }, [socketRef.current]);

  return (
    <div id="monaco-editor" style={{ height: "100%", width: "100%" }}></div>
  );
};

export default Editor;
