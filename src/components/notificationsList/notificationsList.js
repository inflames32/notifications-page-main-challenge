import Card from "../card/card";
import data from "../../assets/notificationsList.json";
const NotificationsList = ({ isNotification }) => {
  console.log(data);
  return (
    <div className="notifications_list">
      {data.map((card) => (
        <Card
          isNotification={isNotification}
          avatar={card.avatar}
          username={card.username}
          action={card.action}
          picture={card.picture}
          pageLink={card.pageLink}
          privateMessage={card.privateMessage}
          notificationIsRead={card.notificationIsRead}
          date={card.date}
          publicLink={card.publicLink}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
