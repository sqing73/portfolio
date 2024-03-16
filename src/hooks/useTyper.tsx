import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../store";
import { flushSync } from "react-dom";

type TypoStatus =
  | "none"
  | "firstTyped"
  | "secondTyped"
  | "firstDeleted"
  | "secondDeleted";

const randomLetter = () => {
  const letters = "abcdefgaweqwrcschijklmn;opiop-i k.l,mqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

const typeWord = (
  output: string[],
  word: string,
  wordIndex: number,
  cursor: number
): string[] => {
  const newOutput = [...output];
  if (!newOutput[wordIndex]) {
    newOutput[wordIndex] = word[cursor];
  } else {
    newOutput[wordIndex] += word[cursor];
  }
  return newOutput;
};

const typeDelete = (output: string[], wordIndex: number): string[] => {
  const newOuput = [...output];
  const len = output[wordIndex].length;
  newOuput[wordIndex] = output[wordIndex].substring(0, len - 1);
  return newOuput;
};

// const normalType = (current)
const useTypeWord = (words: string[], typo: boolean = true): string[] => {
  const [output, setOutput] = useState<string[]>([]);
  const typeDelay = useAppSelector((state) => state.setting.typeDelay);
  const blinks = useRef<number>(4); // State to control blinking
  const cursor = useRef<number>(0);
  const wordIndex = useRef<number>(0);
  const typoStatus = useRef<TypoStatus>("none");
  const typeInterval = useRef<NodeJS.Timeout | null>(null);
  const lastDelay = useRef<number>(0);

  useEffect(() => {
    // Function to handle typing
    const type = async () => {
      // cursor blink first
      if (blinks.current > 0) {
        setOutput((prev) => {
          // _ is showing
          if (prev[0] === "_") {
            blinks.current--;
            // make sure _ is removed before typing
            return [""];
          } else {
            return ["_"];
          }
        });
        return;
      }
      // all words typed
      if (wordIndex.current === words.length) {
        clearInterval(typeInterval.current || undefined);
        return;
      }
      // check if cursor is within input length
      const currentWord = words[wordIndex.current];
      if (cursor.current >= currentWord.length) {
        wordIndex.current++;
        cursor.current = 0;
        return;
      }
      const typoChance = Math.random();
      // if typo occured, we add another typo or fix one
      if (typoStatus.current !== "none") {
        switch (typoStatus.current) {
          case "firstTyped":
            flushSync(() =>
              setOutput((prev) =>
                typeWord(prev, randomLetter(), wordIndex.current, 0)
              )
            );
            typoStatus.current = "secondTyped";
            break;
          case "secondTyped":
            flushSync(() =>
              setOutput((prev) => typeDelete(prev, wordIndex.current))
            );
            typoStatus.current = "secondDeleted";
            break;
          case "secondDeleted":
            flushSync(() =>
              setOutput((prev) => typeDelete(prev, wordIndex.current))
            );
            typoStatus.current = "none";
            break;
        }
        return;
      }
      // do not make typo on the last type or accelerated
      if (
        typeDelay === 20 ||
        cursor.current === currentWord.length - 1 ||
        typoChance > 0.02 ||
        !typo
      ) {
        // normal typing
        flushSync(() =>
          setOutput((prev) =>
            typeWord(prev, currentWord, wordIndex.current, cursor.current)
          )
        );
        cursor.current++;
      } else {
        // typo typing
        typoStatus.current = "firstTyped";
        const typo = randomLetter();
        flushSync(() =>
          setOutput((prev) => typeWord(prev, typo, wordIndex.current, 0))
        );
      }
    };

    // start typing animation
    // triggered due to a type delay update
    if (typeDelay !== lastDelay.current) {
      clearInterval(typeInterval.current || undefined);
      typeInterval.current = setInterval(async () => {
        await type();
      }, typeDelay);
      lastDelay.current = typeDelay;
    }
    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(typeInterval.current || undefined);
    };
  }, [typeDelay, typo, words]);
  return output;
};

export default useTypeWord;
