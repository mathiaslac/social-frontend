import { Fragment } from "react";
import "./module.left-users.css";

const ChatsTabs = [
  {
    id: "user1",
    nickname: "User1",
    userImg: "assets/img/friend1.jpg",
    dotClass: "dotBack on__dot",
    status: "Online",
    statusClass: "online",
    lastMessage:
      "A eligendi eveniet sed aperiam exercitationem quo perferendis placeat",
    activeTime: 1,
    activeDays: "d",
  },
  {
    id: "user2",
    nickname: "User2",
    userImg: "assets/img/friend2.jpg",
    dotClass: "dotBack on__dot",
    status: "Online",
    statusClass: "online",
    lastMessage:
      "Et dicta quia qui ipsam excepturi aut beatae voluptatem non mollitia omnis eos voluptates ut tempore voluptatem!",
    activeTime: 3,
    activeDays: "d",
  },
  {
    id: "user3",
    nickname: "User3",
    userImg: "assets/img/friend3.jpg",
    dotClass: "dotBack on__dot",
    status: "Online",
    statusClass: "online",
    lastMessage: "33 veritatis galisum qui nemo doloremque ut dolorem tenetur.",
    activeTime: 6,
    activeDays: "d",
  },
  {
    id: "user4",
    nickname: "User4",
    userImg: "assets/img/friend4.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Et suscipit ratione qui perferendis neque ut dolore autem eum libero officiis",
    activeTime: 1,
    activeDays: "w",
  },
  {
    id: "user5",
    nickname: "User5",
    userImg: "assets/img/friend5.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Non reprehenderit inventore et consequatur ex eveniet quis a eaque",
    activeTime: 1,
    activeDays: "w",
  },
  {
    id: "user6",
    nickname: "User6",
    userImg: "assets/img/friend6.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Non reprehenderit inventore et consequatur ex eveniet quis a eaque ",
    activeTime: 1,
    activeDays: "w",
  },
  {
    id: "user7",
    nickname: "User7",
    userImg: "assets/img/friend7.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Et atque dolor eos nisi nostrum et harum asperiores qui deleniti ipsum sit eveniet rerum.",
    activeTime: 2,
    activeDays: "w",
  },
  {
    id: "user8",
    nickname: "User8",
    userImg: "assets/img/friend8.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Sit officiis ipsam et velit ducimus non ducimus blanditiis ea consequatur libero eum voluptatem dolor",
    activeTime: 2,
    activeDays: "w",
  },
  {
    id: "user9",
    nickname: "User9",
    userImg: "assets/img/friend9.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Ea voluptatem inventore et earum commodi eos natus magni non reiciendis",
    activeTime: 3,
    activeDays: "w",
  },
  {
    id: "user10",
    nickname: "User10",
    userImg: "assets/img/friend10.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Sit consectetur ratione id omnis necessitatibus qui quos corrupti nam labore inventore in galisum culpa.",
    activeTime: 3,
    activeDays: "w",
  },
  {
    id: "user11",
    nickname: "User11",
    userImg: "assets/img/friend11.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Qui sequi tempore ut laborum dolorem et architecto repellat aut autem eveniet.",
    activeTime: 5,
    activeDays: "w",
  },
  {
    id: "user12",
    nickname: "User12",
    userImg: "assets/img/friend12.jpg",
    dotClass: "dotBack off__dot",
    status: "Offline",
    statusClass: "offline",
    lastMessage:
      "Id commodi illo At consequuntur delectus ex maiores praesentium sed velit atque",
    activeTime: 5,
    activeDays: "w",
  },
];

const LeftUsers = () => {
  return (
    <Fragment>
      <aside
        style={{
          position: "sticky",
          top: 0,
          alignSelf: "flex-start",
          height: 500,
        }}
      >
        <div className="users" style={{ height: "658px", overflow: "overlay" }}>
          {ChatsTabs.map(
            ({
              id,
              nickname,
              userImg,
              dotClass,
              lastMessage,
              activeTime,
              activeDays,
            }) => (
              <div key={id} className="user-tab pointer">
                <div className="user">
                  <img
                    src={userImg}
                    alt="user-avatar"
                    className="user-avatar"
                  />
                  <span className={dotClass}></span>
                </div>
                <div className="flex-users">
                  <div className="nicks">
                    <span className="nick">{nickname}</span>
                    <p className="last-message">{lastMessage}</p>
                  </div>
                  <div className="activity">
                    <span className="last-activity">
                      {activeTime} {activeDays}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </aside>
    </Fragment>
  );
};

export default LeftUsers;
