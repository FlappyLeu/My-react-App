import "../style/score.css";

export default function Score() {
  const number = 15;
  return (
    <>
      <div className="score">
        <button>+</button>
        <p>{number}</p>
        <button>-</button>
      </div>
    </>
  );
}
