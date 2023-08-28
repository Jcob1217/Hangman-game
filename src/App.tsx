import "./App.css";
import { useState, useEffect } from "react";
import Hangman from "./Hangman";
import WordToGuess from "./WordToGuess";
import Keyboard from "./Keyboard";
import Result from "./Result";
import PlayAgain from "./PlayAgain";
import wordList from "./wordList.json";

function App() {
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [wordToGuessLetters, setWordToGuessLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  const createWord = () => {
    const word =
      wordList[
        Math.floor(Math.random() * (wordList.length - 0 + 1))
      ].toUpperCase();

    setWordToGuess(word);
    setWordToGuessLetters([...new Set(word.split(""))]);
  };

  useEffect(() => {
    createWord();
  }, []);

  const checkLetter = () => {
    const latestLetter = guessedLetters[guessedLetters.length - 1];
    if (latestLetter) {
      if (wordToGuess.includes(latestLetter)) {
        setCorrectLetters((prevCorrectLetters) => [
          ...prevCorrectLetters,
          latestLetter,
        ]);
      } else {
        setWrongLetters((prevWrongLetters) => [
          ...prevWrongLetters,
          latestLetter,
        ]);
      }
    }
  };

  const checkResult = () => {
    if (wordToGuess && correctLetters.length === wordToGuessLetters.length) {
      setGameFinished(true);
      setGameWon(true);
    } else if (wordToGuess && wrongLetters.length === 6) {
      setGameFinished(true);
    }
  };

  useEffect(() => {
    checkLetter();
  }, [guessedLetters]);

  useEffect(() => {
    checkResult();
  }, [correctLetters, wrongLetters]);

  const playAgain = () => {
    createWord();
    setCorrectLetters([]);
    setWrongLetters([]);
    setGuessedLetters([]);
    setGameFinished(false);
    setGameWon(false);
  };

  return (
    <div className="app">
      <Result gameFinished={gameFinished} gameWon={gameWon} />
      <Hangman wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <WordToGuess
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        gameFinished={gameFinished}
        gameWon={gameWon}
      />
      <Keyboard
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        gameFinished={gameFinished}
      />
      {gameFinished ? <PlayAgain playAgain={playAgain} /> : ""}
    </div>
  );
}

export default App;
