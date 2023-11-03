import Title from "./components/title";
import Count from "./components/Count";
import useCountDown from "./hooks/useCountDown";

import Niver from "./assets/aniversario-genera-10-anos.jpg";

import "./App.css";

function App() {
  const [day, hour, minute, second] = useCountDown(
    "December 13, 2023 00:00:00"
  );

  return (
    <div className="App" style={{ backgroundImage: `url(${Niver})` }}>
      <div className="container">
        <Title title="contagem para o Aniversário" />
        <div className="countdown-container">
          <Count title="Dias" number={day} />
          <Count title="Horas" number={hour} />
          <Count title="Minutos" number={minute} />
          <Count title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
