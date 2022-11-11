import { useState } from "react";

import Card from "./card/card.js";
import Header from "../components/header/header.js";

import "../styles/App.scss";

function App() {
  const [isNotification, setIsNotification] = useState(true);

  return (
    <div className="App">
      <Header
        isNotification={isNotification}
        setIsNotification={setIsNotification}
      />
      <Card isNotification={isNotification} />
    </div>
  );
}

export default App;
