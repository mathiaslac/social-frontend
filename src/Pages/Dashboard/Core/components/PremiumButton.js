import { Link } from "react-router-dom";

const PremiumButton = () => {
  return (
    <Link
      to="/dashboard/premiums"
      className="ideas-btn ideas-btn-primary postUploader__btn"
      style={{ background: "#ffb229", width: "100%" }}
    >
      <img
        alt="test-img"
        src="../../assets/img/svg/dashboard/crown.svg"
        height="14"
        width="14"
      />

      <span>Premium</span>
    </Link>
  );
};

export default PremiumButton;
