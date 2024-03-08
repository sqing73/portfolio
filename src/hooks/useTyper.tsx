import { useEffect, useRef, useState } from "react";

const randomLetter = () => {
  const letters = "abcdefgaweqwrcschijklmn;opiop-i k.l,mqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

const useTypeWord = (words: string[]): string[] => {
  const [output, setOutput] = useState<string[]>(
    new Array(words.length).fill("")
  );
  const [blink, setBlink] = useState(true); // State to control blinking
  const cursor = useRef(0);
  const inTypo = useRef(false);
  const startType = useRef(false);
  const wordIndex = useRef(0);
  useEffect(() => {
    // Function to handle typing
    const delay = 100;
    const type = async () => {
      const timeout = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      // Check if cursor is within input length
      if (wordIndex.current < words.length) {
        const currentWord = words[wordIndex.current];
        if (cursor.current <= currentWord.length) {
          // Simulate typo with a 7% chance
          const typoChance = Math.random();
          if (!inTypo.current && typoChance < 0.05) {
            const typo1 =
              cursor.current > 0 && Math.random() < 0.5
                ? currentWord[cursor.current - 1]
                : randomLetter();
            const typo2 = randomLetter();
            setOutput((prev) => [...prev]);
            inTypo.current = true;

            setOutput((prev) => {
              const newOuput = [...prev];
              newOuput[wordIndex.current] = prev[wordIndex.current] + typo1;
              return newOuput;
            });
            await timeout(delay);
            setOutput((prev) => {
              const newOuput = [...prev];
              newOuput[wordIndex.current] = prev[wordIndex.current] + typo2;
              return newOuput;
            });
            await timeout(delay / 2);
            setOutput((prev) => {
              const newOuput = [...prev];
              newOuput[wordIndex.current] = prev[wordIndex.current].substring(
                0,
                prev[wordIndex.current].length - 1
              );
              return newOuput;
            });
            await timeout(delay / 2);
            setOutput((prev) => {
              const newOuput = [...prev];
              newOuput[wordIndex.current] = prev[wordIndex.current].substring(
                0,
                prev[wordIndex.current].length - 1
              );
              return newOuput;
            });
            inTypo.current = false;
          }

          // Check if not in typo state
          if (!inTypo.current) {
            if (cursor.current === currentWord.length) {
              cursor.current = 0;
              wordIndex.current++;
            } else {
              setOutput((prev) => {
                const newOuput = [...prev];
                console.log(wordIndex.current);
                newOuput[wordIndex.current] =
                  prev[wordIndex.current] +
                  words[wordIndex.current][cursor.current++];
                return newOuput;
              });
            }
          }
        }
      }
    };

    // Start blinking effect before typing
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    // Start typing after blinking multiple times
    const typeTimeout = setTimeout(() => {
      startType.current = true;
    }, 2000); // Blinking duration is 500 ms * 5 = 2500 ms

    // Start typing animation
    const intervalId = setInterval(async () => {
      if (startType.current) {
        await type();
      }
    }, delay);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(blinkInterval);
      clearInterval(intervalId);
      clearTimeout(typeTimeout);
    };
  }, [words]);
  if (!startType.current) {
    return blink ? ["_"] : [""];
  }
  const complete =
    wordIndex.current === words.length - 1 &&
    cursor.current === words[wordIndex.current].length - 1;
  if (!complete) {
    const res = [...output];
    res[wordIndex.current] += "_";
    return res;
  }
  return output;
};

export default useTypeWord;
