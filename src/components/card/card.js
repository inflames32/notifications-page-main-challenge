import { useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import "../../styles/card.scss";

const Card = ({
  isNotification,
  avatar,
  username,
  picture,
  action,
  pageLink,
  notificationIsRead,
  privateMessage,
  date,
  publicLink,
}) => {
  const [readNotification, setReadNotification] = useState(false);
  const handleNotification = () => {
    console.log("je lis la notif");
  };
  return (
    <div
      className={`card${notificationIsRead ? "" : "_not_read"}`}
      onClick={handleNotification}
    >
      <div className="card_avatar_container">
        <div className="card_header">
          <img src={avatar} alt="avatar" className="card_avatar" />
        </div>
      </div>
      <div className="card_informations">
        <div className="card_top">
          <div className="card_body">
            <a href="#" className="card_body_username">
              {username}
            </a>
            <span className="card_body_action">{action}</span>
            <a href={pageLink} className="card_body_pageLink">
              {pageLink}
            </a>
            {publicLink && (
              <a href={publicLink} className="card_publicLink">
                {publicLink}
              </a>
            )}
            {picture && (
              <div className="card_with_picture">
                <img className="card_picture" src={picture} />
              </div>
            )}

            <span className="card_red">
              {notificationIsRead ? "" : <VscDebugBreakpointData />}
            </span>
          </div>
        </div>
        <div className="card_bottom">
          <div className="card_date">{date}</div>
          {privateMessage && (
            <p className="card_privateMessage">{privateMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
