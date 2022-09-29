import "../../../layouts/Content/Feed/Feed.css";

import { ModesMenu } from "../components/index";

const RightFeed = () => {
  return (
    <aside
      style={{
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
        borderRadius: "10px",
      }}
    >
      <ModesMenu />
    </aside>
  );
};

export default RightFeed;
