import { Fragment, useState, useContext, useMemo } from "react";
import jwtDecode from "jwt-decode";
import "./module.vip.css";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { API_URL } from "../../util/consts";
import { toast } from "react-toastify";
import { Context } from "../../index";
import Modal from "../../components/posts/AddPost/Modal/Modal";

const Donate = () => {
  const [showDonate, setShowDonate] = useState(false);
  const { user } = useContext(Context);
  const [modal, setMState] = useState(false);
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
                src="../../assets/img/svg/servers/success-alert.svg"
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
                src="../../assets/img/svg/servers/success-alert.svg"
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
    <Fragment>
      <Helmet>
        <title>Ideas - Premium</title>
      </Helmet>
      <div className="vip--container">
        {user.isAuth ? (
          <button
            onClick={() => setShowDonate(true)}
            to="/dashboard/premiums"
            className="ideas-btn ideas-btn-primary postUploader__btn"
            style={{ background: "#ffb229", width: 200 }}
          >
            <img
              alt="test-img"
              src="../../assets/img/svg/dashboard/crown.svg"
              height="14"
              width="14"
            />
            <span>Donate</span>
          </button>
        ) : (
          <div className="vip--container">
            <p>To access this page you have to </p>
            <button className="login-button" onClick={handleLogin}>
              <img
                className="steam-icon-login"
                src="../../assets/img/svg/servers/steam-logo.svg"
                alt="steam-logo"
                width={18}
                height={18}
              />
              Login with Steam
            </button>
          </div>
        )}
      </div>
      <Modal onClose={() => setShowDonate(false)} show={showDonate}>
        {user.isAuth ? (
          <div id="user-is-auth" className="ideas-modal-content">
            <div className="ideas-modal-header">
              <div className="ideas-modal-title" id="rcDialogTitle0">
                <div className="modal__title modal__title--withClose">
                  Donate
                </div>
              </div>
            </div>
            <div className="ideas-modal-body">
              <button
                className="ideas-btn ideas-btn-primary postUploader__btn"
                style={{ background: "#ffb229", width: "100%" }}
              >
                <img
                  alt="test-img"
                  src="../../assets/img/svg/dashboard/crown.svg"
                  height="14"
                  width="14"
                />

                <span>Donate</span>
              </button>
            </div>
          </div>
        ) : (
          <div id="user-isnot-auth" className="ideas-modal-content">
            <div className="ideas-modal-header">
              <div className="ideas-modal-title" id="rcDialogTitle0">
                <div className="modal__title modal__title--withClose">
                  Login First
                </div>
              </div>
            </div>
            <div className="ideas-modal-body">
              <img
                onClick={() => setShowDonate(false)}
                alt="test-img"
                height="24"
                width="24"
                className="modal__closeIcon"
                src="https://d14eu5yur8w3te.cloudfront.net/cstatic/icons/CloseWithBackground.svg"
              />
              <div style={{ width: "100%", position: "relative" }}>
                <div className="post-creator_postCreator__uploader__wrapper__2ELby">
                  <span>
                    <div className="post-creator_postCreator__uploader__3Jsdv">
                      <div className="login-center-modal">
                        <button className="login-button" onClick={handleLogin}>
                          <img
                            className="steam-icon-login"
                            src="../../assets/img/svg/servers/steam-logo.svg"
                            alt="steam-logo"
                            width={18}
                            height={18}
                          />
                          Login with Steam
                        </button>
                      </div>
                    </div>
                  </span>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default Donate;
