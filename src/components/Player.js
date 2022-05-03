import Score from "../components/Score";
import "../style/player.css";

export default function Player(props) {
  console.log(props);
  return (
    <div className="player">
      <h2>{props.playerData.name}</h2>
      <Score scoreData={props.playerData.score} />
    </div>
  );
}
