import { useContext } from "react";
import { Context } from "../../../..";

const AdminCard = () => {
  const { user } = useContext(Context);
  return (
    <div className="top-dashboard-user">
      <img
        className="top-dash-avatar"
        src={user.user.avatar.medium}
        alt="user-avatar"
        width={40}
        height={40}
      />
      <div className="right-dashboard-user">
        <p className="nickname-dash">{user.user.name}</p>
        <img
          className="admins-img-dash"
          src={`../../assets/img/svg/admins/${user.user.group}.svg`}
          alt="group-img"
        />
      </div>
    </div>
  );
};

export default AdminCard;
