import { useState } from "react";

import Header from "../components/header/header.js";
import NotificationList from "../components/notificationsList/notificationsList.js";

import "../styles/App.scss";

function App() {
  const [isNotification, setIsNotification] = useState(true);

  return (
    <div className="App">
      <Header
        isNotification={isNotification}
        setIsNotification={setIsNotification}
      />
      <NotificationList isNotification={isNotification} />
    </div>
  );
}

export default App;
