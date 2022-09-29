<div className="ideas-upload ideas-upload-drag post-creator_postCreator__uploader__3Jsdv">
  <span className="ideas-upload ideas-upload-btn" role="button">
    <input
      type="file"
      accept="image/jpeg,image/png,image/gif,image/webp"
      onChange={(e) => handleImageChange(e)}
    />
    <div className="ideas-upload-drag-container">
      <div className="post-creator_postCreator__uploadImage__2QQ4w">
        <img
          alt="test-img"
          height="24"
          width="24"
          src="assets/img/svg/modal/WhiteImage.svg"
        />
      </div>
      <p className="ideas-upload-text">
        Drop Here or{" "}
        <span className="post-creator_postCreator__chooseText__2ueJb">
          Choose File
        </span>
        <br />
        up to 5MB
      </p>
    </div>
  </span>
</div>;
