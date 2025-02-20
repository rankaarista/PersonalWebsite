import { useState, useEffect } from "react";

function useTypewriter(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText(""); // Reset text on re-render
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]); // Re-run when text changes

  return displayedText;
}

export default useTypewriter;
