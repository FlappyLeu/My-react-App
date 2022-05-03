import "../style/header.css";

export default function Header() {
  let playerNumber = 4;
  return (
    <div className="header">
      <>
        <h1>SCOREBOARD</h1> <p>Player: {playerNumber}</p>
      </>
    </div>
  );
}
