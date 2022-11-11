import "../../styles/header.scss";
const Header = ({ isNotification, setIsNotification }) => {
  const markHasRead = () => {
    setIsNotification(false);
  };
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_title">
          Notification{isNotification ? "s" : ""}
        </div>
        <div className="header_number">{isNotification ? "3" : ""}</div>
      </div>
      <span className="header_read" onClick={markHasRead}>
        Mark all as read
      </span>
    </header>
  );
};

export default Header;
