import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../../../components/posts/RegularPost/module.posts.css";
import "../../../Ladder/components/module.top.css";

const Sourcebans = () => {
  return (
    <Fragment>
      <p>test Sourcebans</p>
      <nav>
        <Link to="bans">Bans</Link>
        <Link to="comms">Comms</Link>
        <Link to="admins">Admins</Link>
      </nav>
    </Fragment>
  );
};

export default Sourcebans;
