import "./styles/wordToGuess.css";

type wordToGuessProps = {
  wordToGuess: string;
  guessedLetters: string[];
  gameFinished: boolean;
  gameWon: boolean;
};

const WordToGuess = ({
  wordToGuess,
  guessedLetters,
  gameFinished,
  gameWon,
}: wordToGuessProps) => {
  return (
    <div className="word-container">
      {wordToGuess.split("").map((letter, key) => (
        <div key={key} className="letter-container">
          {!gameFinished ? (
            guessedLetters.includes(letter) ? (
              <span>{letter}</span>
            ) : (
              ""
            )
          ) : (
            <span className={`${gameWon ? "blue" : "red"}`}>{letter}</span>
          )}
          <div className="underline" />
        </div>
      ))}
    </div>
  );
};

export default WordToGuess;
