import "./styles/result.css";

type resultProps = {
  gameFinished: boolean;
  gameWon: boolean;
};

const Result = ({ gameFinished, gameWon }: resultProps) => {
  return (
    <div className="result-container">
      {gameFinished ? (
        gameWon ? (
          <div className="won">Congratulations, You Won!</div>
        ) : (
          <div className="lost">Nice try!</div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
