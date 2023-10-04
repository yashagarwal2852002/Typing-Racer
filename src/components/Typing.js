import React, { useState, useEffect } from 'react';

function Typing() {
  const sentences = [
    'The quick brown fox jumps over the lazy dog',
    'React is a JavaScript library for building user interfaces',
    'Typing is a valuable skill in the digital age',
  ];

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [sentenceLetters, setSentenceLetters] = useState([]);
  const [isCorrect, setIsCorrect] = useState(true);

  useEffect(() => {
    setSentenceLetters(Array.from(sentences[sentenceIndex]));
  }, [sentenceIndex]);

  const handleInputChange = (e) => {
    const typedValue = e.target.value;
    setInputValue(typedValue);

    if (typedValue === sentenceLetters[currentLetterIndex]) {
      if (currentLetterIndex === sentenceLetters.length - 1) {
        // Move to the next sentence when the current sentence is completed
        if (sentenceIndex < sentences.length - 1) {
          setSentenceIndex(sentenceIndex + 1);
          setCurrentLetterIndex(0);
          setInputValue('');
        }
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="Typing">
      <h1>Typing Speed Tester</h1>
      <p>
        {sentenceLetters.map((letter, index) => (
          <span
            key={index}
            style={{
              backgroundColor:
                index === currentLetterIndex
                  ? isCorrect
                    ? 'green'
                    : 'red'
                  : 'transparent',
            }}
          >
            {letter}
          </span>
        ))}
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderColor: isCorrect ? 'black' : 'red' }}
        disabled={currentLetterIndex === sentenceLetters.length}
      />
    </div>
  );
}

export default Typing;
