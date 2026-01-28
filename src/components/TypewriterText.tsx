import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  prefix: string;
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({
  prefix,
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    // If we're on the last word and finished typing, stay there
    if (currentWordIndex === words.length - 1 && currentText === currentWord && !isDeleting) {
      return;
    }

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing current word
          if (currentWordIndex < words.length - 1) {
            setIsPaused(true);
          }
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  const isLastWord = currentWordIndex === words.length - 1 && currentText === words[words.length - 1];

  return (
    <span className="inline-flex items-baseline">
      <span>{prefix}</span>
      <span className="text-primary ml-2 min-w-[200px] inline-block">
        {currentText}
        <span 
          className={`typewriter-cursor inline-block w-[3px] h-[1em] bg-primary ml-1 align-baseline translate-y-[2px] ${
            isLastWord ? 'animate-pulse' : ''
          }`}
        />
      </span>
    </span>
  );
};

export default TypewriterText;
