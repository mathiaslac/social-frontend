import React, { Component } from "react";
import "./UpdatePost.css";

class UpdatePost extends Component {
  render() {
    return (
      <div className="card__post update__border">
        <div className="update__icon">
          <i className="fas fa-bullhorn"></i>
        </div>
        <div className="top__post">
          <div className="avatar__post">
            <img
              className="avatar-circle"
              src="assets/img/steamUser.png"
              alt="avatar"
            />
          </div>
          <div className="left__top-post">
            <div className="up__top-post">
              <div className="nick__post update__color">Snooze</div>
              <div className="reason__post">added a photo</div>
            </div>
            <div className="bottom__top-post">
              <div className="date__post">10 miutes ago - </div>
              <div className="conf__post">
                <i className="fa fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text__post">
          <p>🔥 🤩 UPDATE ! 🤩 🔥</p>
          <p>New content on servers</p>
          <p>Features 1</p>
          <p>Features 2</p>
          <p>Features 3</p>
        </div>
        <img
          className="media__post"
          src="assets/img/media1.png"
          alt="media-post"
        />
        <div className="like__post">
          <div className="left__like">
            <img src="assets/img/likes.png" alt="likes" />
            <p className="likes__count">21</p>
          </div>
          <div className="right__like">
            <i className="fa fa-comments"></i>
            <p className="comms__count">4 Comments</p>
          </div>
        </div>
        <div className="bottom__post">
          <div className="like__bot">
            <i className="far fa-thumbs-up"></i>
            <p className="fat__post">Like</p>
          </div>
          <div className="like__bot">
            <i className="far fa-comment-alt"></i>
            <p className="fat__post">Comment</p>
          </div>
          <div className="like__bot">
            <i className="fas fa-share"></i>
            <p className="fat__post">Share</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePost;
