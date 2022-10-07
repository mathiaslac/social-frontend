import { useState, useContext, useMemo } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../../firebaseConfig";
import { toast } from "react-toastify";
import { Context } from "../../../../";
import { API_URL } from "../../../../util/consts";
import jwtDecode from "jwt-decode";
import Modal from "../../../../components/posts/AddPost/Modal/Modal";

const CreateUpdate = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: "UPDATE !",
            description: formData.description,
            imageUrl: url,
            postClass: "update-post",
            postColor: "update-post-color",
            avatar:
              "https://firebasestorage.googleapis.com/v0/b/ideas-26aa9.appspot.com/o/images%2Fideas-logo.png?alt=media&token=82ae6169-00f5-4b18-b50e-4eb5abf17d95",
            createdAt: Timestamp.now().toDate(),
            createdBy: "Ideas Gaming",
            userId: "ideas",
            likes: [],
            comments: [],
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };
  return (
    <>
      <button
        onClick={() => setShowCreatePost(true)}
        className="ideas-btn ideas-btn-primary postUploader__btn"
        style={{ width: "100%" }}
      >
        <img
          alt="test-img"
          src="../../assets/img/svg/feed/WhitePlus.svg"
          height="14"
          width="14"
        />
        <span>Post Update</span>
      </button>
      <Modal
        title="Add post"
        onClose={() => setShowCreatePost(false)}
        show={showCreatePost}
      >
        {user.isAuth ? (
          <div id="user-is-auth" className="ideas-modal-content">
            <div className="ideas-modal-header">
              <div className="ideas-modal-title" id="rcDialogTitle0">
                <div className="modal__title modal__title--withClose">
                  Post Update
                </div>
              </div>
            </div>
            <div className="ideas-modal-body">
              <img
                onClick={() => setShowCreatePost(false)}
                alt="test-img"
                height="24"
                width="24"
                className="modal__closeIcon"
                src="https://d14eu5yur8w3te.cloudfront.net/cstatic/icons/CloseWithBackground.svg"
              />
              <div style={{ width: "100%", position: "relative" }}>
                <div className="post-creator_postCreator__uploader__wrapper__2ELby">
                  <span>
                    <div className="ideas-upload ideas-upload-drag post-creator_postCreator__uploader__3Jsdv">
                      <span
                        className="ideas-upload ideas-upload-btn"
                        role="button"
                      >
                        <label className="ideas-upload-drag-container pointer">
                          <div style={{ marginTop: 30 }}>
                            <img
                              src="../../../assets/img/svg/modal/WhiteImage.svg"
                              alt="WhiteImage"
                            />
                            <p className="ideas-upload-text">
                              <span className="post-creator_postCreator__chooseText__2ueJb">
                                Choose File
                              </span>
                              <br />
                              up to 5MB
                            </p>
                          </div>
                          <input
                            type="file"
                            name="image"
                            className="input-files"
                            accept="image/jpeg,image/png,image/gif,image/webp"
                            onChange={(e) => handleImageChange(e)}
                          />
                        </label>
                      </span>
                    </div>
                    {progress === 0 ? null : (
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped mt-2"
                          style={{ width: `${progress}%` }}
                        >
                          {`uploading image ${progress}%`}
                        </div>
                      </div>
                    )}
                  </span>
                </div>
                <div className="post-title">
                  <h4>Title</h4>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="post-message">
                  <h4>Message</h4>
                  <textarea
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <button
                  className="postUploader__btn publish-btn ideas-btn"
                  style={{ width: "100%" }}
                  onClick={handlePublish}
                >
                  Publish
                </button>
              </div>
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
                onClick={() => setShowCreatePost(false)}
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
    </>
  );
};

export default CreateUpdate;
