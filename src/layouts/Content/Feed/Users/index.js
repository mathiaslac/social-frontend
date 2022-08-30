import { Fragment } from "react";

import "./module.sugg.css";

const UsersSugg = [
  {
    id: "user1",
    nickname: "User1",
    userImg: "assets/img/friend1.jpg",
    mutualFriends: 4,
  },
  {
    id: "user2",
    nickname: "User2",
    userImg: "assets/img/friend2.jpg",
    mutualFriends: 13,
  },
  {
    id: "user3",
    nickname: "User3",
    userImg: "assets/img/friend3.jpg",
    mutualFriends: 17,
  },
];

const Sugg = () => {
  return (
    <Fragment>
      <div className="relActions">
        <div className="relActions__recs">
          <div className="ideas-row relActions__title">
            Suggested For You <a href="/#">See All</a>
          </div>

          {UsersSugg.map(({ id, nickname, userImg, mutualFriends }) => (
            <div className="relActions__entry" key={id}>
              <div className="ideas-row ideas-row-no-wrap relActions__row">
                <div className="ideas-col relActions__avatar">
                  <a href="/#">
                    <span
                      className="ideas-avatar ideas-avatar-circle ideas-avatar-image"
                      style={{
                        height: "40px",
                        width: "40px",
                        fontSize: "40px",
                      }}
                    >
                      <img
                        src={userImg}
                        alt={id}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </span>
                  </a>
                </div>
                <div className="ideas-col relActions__text">
                  <a href="/#">
                    <div className="relActions__username">{nickname}</div>
                  </a>
                  <div className="relActions__reason"></div>
                  <div
                    className="relActions__reason"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {mutualFriends} mutual friends
                  </div>
                </div>
                <div className="ideas-col relActions__buttons">
                  <button className="ideas-btn ideas-btn-primary home__followBtn followBtn--notFollowing">
                    <span>Follow</span>
                  </button>
                  <button className="ideas-btn ideas-btn-default home__followBtn followBtn--rejectRec">
                    <img
                      src="assets/img/svg/feed/Close-Big.svg"
                      alt="close"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
              <div className="ideas-divider ideas-divider-horizontal relActions__divider"></div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Sugg;
