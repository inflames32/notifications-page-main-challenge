import { VscDebugBreakpointData } from "react-icons/vsc";
import "../../styles/card.scss";
import Avatar from "../../assets/images/avatar-mark-webber.webp";
const Card = ({ isNotification }) => {
  return (
    <div className="card">
      <div className="card_header">
        <img src={Avatar} alt="avatar" className="card_avatar" />
      </div>
      <div className="card_body">
        <div>
          <a href="#" className="card_body_name">
            Mark Webber
          </a>
          <span className="card_body_text">reacted to your recent post</span>
          <a href="#" className="card_body_link">
            My first tournament today
          </a>
          !
          <span className="card_red">
            {isNotification ? <VscDebugBreakpointData /> : ""}
          </span>
        </div>

        <div className="card_date">1m ago</div>
      </div>
    </div>
  );
};

export default Card;
