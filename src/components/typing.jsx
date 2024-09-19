import { useState, useEffect } from "react";

const TypingAnimation = ({
    words = [ "Engineer" , "Coder.",  "Freelancer.", "Software Developer.", "Entrepreneur.", "ML Engineer.", "Data Analyst."]

}) => {
 
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < words[wordIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentWord(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentWord(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (charIndex === words[wordIndex].length) {
      // Word typed completely, start deleting after a delay
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Loop through the words
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="text-2xl font-bold text-gray-800">
      I am a <span className="text-black">{currentWord}</span>
    </div>
  );
};

export default TypingAnimation;
