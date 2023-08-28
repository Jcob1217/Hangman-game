import "./styles/hangman.css";

const BASE = () => <div className="base" />;
const POLE = () => <div className="pole" />;
const TOP = () => <div className="top" />;
const ROPE = () => <div className="rope" />;
const HEAD = () => <div className="head" />;
const BODY = () => <div className="body" />;
const LEFT_ARM = () => <div className="left-arm" />;
const RIGHT_ARM = () => <div className="right-arm" />;
const LEFT_LEG = () => <div className="left-leg" />;
const RIGHT_LEG = () => <div className="right-leg" />;

const BODY_ELEMENTS = [
  TOP,
  POLE,
  BASE,
  ROPE,
  HEAD,
  BODY,
  LEFT_ARM,
  RIGHT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
];

type hangmanProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

const Hangman = ({ wordToGuess, guessedLetters }: hangmanProps) => {
  const wrongGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ).length;
  // console.log(wrongGuesses);

  return (
    <div className="hangman-container">
      {BODY_ELEMENTS.slice(0, wrongGuesses + 4).map((Element, index) => (
        <Element key={index} />
      ))}
    </div>
  );
};

export default Hangman;
