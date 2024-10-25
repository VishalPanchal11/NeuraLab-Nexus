// Output.js
import { useState } from "react";

const mockExecutionResult = (language, code) => {
  if (language === "javascript") {
    // Create a temporary console to capture log output
    let output = [];
    const originalLog = console.log;

    console.log = (...args) => {
      output.push(args.join(" "));
    };

    // Use eval to execute the code
    try {
      eval(code); // Execute the JavaScript code
    } catch (error) {
      return { output: "", stderr: error.message }; // Capture error if any
    } finally {
      console.log = originalLog; // Restore the original console.log
    }

    return {
      output: output.join("\n"), // Return the collected output
      stderr: "",
    };
  } else {
    return {
      output: `Executed ${language} code:\n${code}`,
      stderr: language === "python" ? "Error: Mock error in Python" : "",
    };
  }
};

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = () => {
    const sourceCode = editorRef.current?.getValue(); // Use optional chaining
    if (!sourceCode) {
      console.error("No code to execute.");
      return;
    }

    setOutput([]);
    setIsError(false);

    try {
      setIsLoading(true);
      const result = mockExecutionResult(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.error("An error occurred while running the code.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <p className="mb-2 text-lg">Output:</p>
      <button
        className={`px-4 py-2 mb-4 border border-green-500 rounded ${
          isLoading ? "bg-green-200" : "bg-transparent"
        } text-green-600`}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[75vh] p-2 border rounded ${
          isError ? "border-red-500 text-red-400" : "border-gray-700"
        }`}
      >
        {output.length > 0
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
