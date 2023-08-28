type playAgainProps = {
  playAgain: () => void;
};

const PlayAgain = ({ playAgain }: playAgainProps) => {
  return (
    <button onClick={playAgain} className="play-again-button">
      Play Again
    </button>
  );
};

export default PlayAgain;
