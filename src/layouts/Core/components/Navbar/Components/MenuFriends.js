import NoRequestsSvg from "../Svg/NoRequestsSvg";

const MenuFriends = () => {
  return (
    <div className="request__spacing dropdown-menu dropdown-menu-right dropdown-widget js_dropdown-keepopen scroll">
      <div className="dropdown-widget-header">
        <span className="title">Friend Requests</span>
      </div>
      <div className="dropdown-widget-body custom-scrollbar">
        <div className="js_scroller">
          <p className="text-center text-muted empty_state">
            <NoRequestsSvg />
            No new requests
          </p>
        </div>
      </div>
      <p className="dropdown-widget-footer pointer">See All</p>
    </div>
  );
};

export default MenuFriends;
