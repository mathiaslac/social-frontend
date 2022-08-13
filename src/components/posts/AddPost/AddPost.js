import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AddPost.css";

import axios from "axios";

import Modal from "./Modal/Modal";

const AddPost = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const submitPost = () => {
    axios.post("http://localhost:5000/api/blog/create", {
      userName: userName,
      text: text,
      postImg: img,
    });
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <motion.div
        className="card card__padding"
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
        style={{
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
        }}
      >
        <img
          className="avatar-circle"
          src="assets/img/steamUser.png"
          alt="avatar-img"
        />
        <div
          onClick={() => setShow(true)}
          className="new-post--btn wanted__post"
        >
          <p>What is on your mind? #Hashtag.. @Mention.. Link.</p>
        </div>
        <div className="update__btn">
          <img className="bullhorn" src="assets/img/bullhorn.svg" alt="icon" />
          <p>Update</p>
        </div>
      </motion.div>
      <Modal title="Add post" onClose={() => setShow(false)} show={show}>
        <div className="new--post">
          <form onSubmit={uploadFile}>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <div className="flex">
              <label htmlFor="file">File</label>
              <input
                type="file"
                id="file"
                accept=".jpg, .png, .jpeg"
                onChange={selectFile}
              />
              <input type="submit" value="Upload" />
            </div>
            <input
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button onClick={submitPost}>Submit</button>
          </form>
          {uploadedFile ? (
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <h3 className="text-center">{uploadedFile.fileName}</h3>
                <img
                  style={{ width: "100%" }}
                  src={uploadedFile.filePath}
                  alt=""
                />
              </div>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default AddPost;
