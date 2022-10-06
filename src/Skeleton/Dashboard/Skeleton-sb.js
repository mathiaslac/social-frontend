import Skeleton from "react-loading-skeleton";
import "../../components/posts/RegularPost/module.posts.css";
import "../../Pages/Ladder/components/css/module.top.css";
import "../../Pages/Dashboard/Views/Sourcebans/module.dash-sb.css";

const SkeletonSb = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_) => (
      <tr
        initial={{
          opacity: 0,
          transform: "translateY(20px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          duration: 0.07,
        }}
        className="sub__card-top flex-card bg--dark-bans"
        style={{
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
        }}
      >
        <td className="user-fix">
          <span className="limited-length">
            <Skeleton count={1} />
          </span>
        </td>
        <td className="center">
          <Skeleton count={1} />
        </td>
        <td className="center">
          <Skeleton count={1} />
        </td>
        <td className="center">
          <Skeleton count={1} />
        </td>
        <td className="center">
          <Skeleton count={1} />
        </td>
      </tr>
    ));
};

export default SkeletonSb;
