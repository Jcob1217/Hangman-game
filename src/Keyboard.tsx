import "./styles/keyboard.css";

const KEYS: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type keyboardProps = {
  wordToGuess: string;
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameFinished: boolean;
};

const Keyboard = ({
  guessedLetters,
  setGuessedLetters,
  wordToGuess,
  gameFinished,
}: keyboardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedKey = e.currentTarget.textContent;
    if (clickedKey) {
      setGuessedLetters((prevGuessedLetters) => [
        ...prevGuessedLetters,
        clickedKey,
      ]);
    }
  };

  const isPressed = (key: string) => {
    if (!guessedLetters.includes(key)) return;
    return true;
  };

  return (
    <div className="keyboard-container">
      <div className="keyboard-grid">
        {KEYS.map((key) => (
          <button
            key={key}
            onClick={handleClick}
            className={`key ${
              isPressed(key)
                ? wordToGuess.includes(key)
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={isPressed(key) || gameFinished}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
