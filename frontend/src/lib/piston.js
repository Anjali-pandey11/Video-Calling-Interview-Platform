

const ONLINE_COMPILER_API = "/api/execute/"; // proxy URL

const LANGUAGE_VERSIONS = {
  javascript: { compiler: "typescript-deno",language: "javascript", version: "18.15.0"},  
  python: { compiler: "python-3.14" },         
  java: { compiler: "openjdk-25" },           
};

export async function executeCode(language, code, input = "") {

  
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];


    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(ONLINE_COMPILER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ✅ No API key needed here anymore
      },
      body: JSON.stringify({
        compiler: languageConfig.compiler,
        code: code,
        input: input,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();
    const output = data.output || "";

    const stderr = data.error || "";


    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };

  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };
  return extensions[language] || "txt";
}
