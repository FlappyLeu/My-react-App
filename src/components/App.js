import Player from "../components/Player";
import "../style/App.css";
import Header from "../components/Header";
const players = [
  {
    name: "chuka",
    age: "20",
    gender: "male",
    score: "30",
  },
  {
    name: "erkhes",
    age: "19",
    gender: "male",
    score: "10",
  },
  {
    name: "miigaa",
    age: "26",
    gender: "male",
    score: "35",
  },
  {
    name: "naba",
    age: "19",
    gender: "male",
    score: "40",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {players.map((players, index) => {
          return <Player key={index} playerData={players} />;
        })}
      </div>
    </div>
  );
}

export default App;
