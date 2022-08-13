import "../../../layouts/Content/Feed/Feed.css";

import { ModesMenu } from "../components/index";

const RightFeed = () => {
  return (
    <aside
      style={{
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
        background: "rgb(19, 24, 33)",
        borderRadius: "10px",
        padding: "26px",
      }}
    >
      <ModesMenu />
    </aside>
  );
};

export default RightFeed;
