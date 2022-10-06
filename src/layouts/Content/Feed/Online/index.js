import { Link } from "react-router-dom";

import "./module.online.css";

const OnlineUser = [
  {
    id: "user1",
    nickname: "User1",
    userImg: "assets/img/friend1.jpg",
    friendIcon: "assets/img/svg/feed/BlueLike.svg",
    dotClass: "on__dot",
    status: "Online",
    statusClass: "online",
  },
  {
    id: "user2",
    nickname: "User2",
    userImg: "assets/img/friend2.jpg",
    friendIcon: "assets/img/svg/feed/BlueLike.svg",
    dotClass: "on__dot",
    status: "Online",
    statusClass: "online",
  },
  {
    id: "user3",
    nickname: "User3",
    userImg: "assets/img/friend3.jpg",
    friendIcon: "assets/img/svg/feed/BlueLike.svg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
  {
    id: "user4",
    nickname: "User4",
    userImg: "assets/img/friend4.jpg",
    friendIcon: "assets/img/svg/feed/BlueLike.svg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
  {
    id: "user5",
    nickname: "User5",
    userImg: "assets/img/friend5.jpg",
    friendIcon: "assets/img/svg/feed/BlueLike.svg",
    dotClass: "off__dot",
    status: "Offline",
    statusClass: "offline",
  },
];

const Online = () => {
  return (
    <div className="ideas-col mini-feed">
      <h3 className="activity__text">Online Friends</h3>
      <div className="mini__feed">
        {OnlineUser.map(
          ({
            id,
            nickname,
            userImg,
            dotClass,
            status,
            statusClass,
            friendIcon,
          }) => (
            <div key={id} className="action__card">
              <div className="user__img">
                <span
                  className="ideas-avatar ideas-avatar-circle ideas-avatar-image"
                  style={{ height: "32px", width: "32px", fontSize: "32px" }}
                >
                  <img
                    src={userImg}
                    alt={id}
                    style={{ height: "100%", width: "100%" }}
                  />
                </span>
                <img src={friendIcon} alt={id} width={16} height={16} />
              </div>
              <div className="actionStr">
                <span>
                  <Link to={`/profile/${nickname}`} className="username__text">
                    {nickname}
                  </Link>
                </span>
                <span className="action__timestamp">
                  <span className={dotClass}></span>
                  <span className={statusClass}>{status}</span>
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Online;
