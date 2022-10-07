import { useState, useContext, useMemo } from "react";
import { API_URL } from "../../../../../util/consts";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { Context } from "../../../../../index";

const LoginButton = () => {
  const { user } = useContext(Context);
  const [, setMState] = useState(false);
  const toastHandle = (error) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const handleLogin = () => {
    // Creating a window
    const popupWindow = window.open(
      API_URL + "/api/auth/login",
      "_blank",
      "width=800, height=600"
    );

    // Open the window with "Authorise in new window"
    setMState(true);

    // Focus on a new window
    if (window.focus) popupWindow.focus();

    // Interval for closing the login window
    let popupTick = setInterval(function () {
      if (popupWindow.closed) {
        clearInterval(popupTick);
        setMState(false);
      }
    }, 500);
  };

  useMemo(() => {
    window.onmessage = (event) => {
      if (event.origin !== API_URL) return;
      const { token, ok, error } = event.data;
      if (ok && token) {
        try {
          let data = jwtDecode(token);
          console.log(data);
          toast("Auth success !", {
            position: "top-center",
            icon: (
              <img
                src="assets/img/svg/servers/success-alert.svg"
                alt="success"
              />
            ),
            autoClose: 2000,
            closeButton: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          user.setUser(data);
          user.setIsAuth(true);
          user.setGroup(data.group);
          localStorage.setItem("jwtToken", token);
        } catch (e) {
          toast("Somethings wrong :(", {
            position: "top-center",
            icon: (
              <img
                src="assets/img/svg/servers/success-alert.svg"
                alt="success"
              />
            ),
            autoClose: 2000,
            closeButton: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toastHandle(error);
      }
    };
  }, [user]);
  return (
    <div className="valign navbar_top_right">
      <div className="user-menu dropdown main_usr_ddmenu">
        <button className="login-button" onClick={handleLogin}>
          <img
            className="steam-icon-login"
            src="assets/img/svg/servers/steam-logo.svg"
            alt="steam-logo"
            width={18}
            height={18}
          />
          Login with Steam
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
