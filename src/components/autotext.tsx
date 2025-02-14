import { useEffect, useState } from "react";


export const AnimatedText = ({ text}: {text:string}) => {
    const [words, setWords] = useState([]);
  
    useEffect(() => {
      // Split the text into words and gradually add them to the state
      const wordArray = text.split(' ');
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        //@ts-ignore
        setWords((prevWords) => [...prevWords, wordArray[currentIndex]]);
        currentIndex += 1;
        if (currentIndex === wordArray.length) {
          clearInterval(interval);
        }
      }, 50); // Adjust timing between words (500ms in this case)
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
      <div className="text-md text-justify  w-full h-full font-medium">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 animate-fadeIn`}
            style={{ animationDelay: `${index * 0.5}s` }} // Delay each word
          >
            {word}<span>&nbsp;</span>
          </span>
        ))}
      </div>
    );
  }

export default {AnimatedText}