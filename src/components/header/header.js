const Header = ({ isNotification, setIsNotification }) => {
  const markHasRead = () => {
    setIsNotification(false);
  };
  return (
    <header className="App_header">
      <div>
        <span className="App_header_title">
          Notification{isNotification ? "s" : ""}
        </span>
        <span className="App_header_number">{isNotification ? "3" : ""}</span>
      </div>
      <span className="App_header_read" onClick={markHasRead}>
        Mark all as read
      </span>
    </header>
  );
};

export default Header;
