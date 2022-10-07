import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <img
        src="assets/img/svg/logos/ideas-logo-both.svg"
        alt="logo"
        width="210"
      />
    </Link>
  );
};

export default Logo;
