import React from "react";
import download from "../../assets/download.jpg";
function GalleryCard({ img, desc }) {
  return (
    <div className="col mt-2 d-flex shadow justify-content-center align-items-center">
      <div
        className="card overflow-hidden position-relative"
        style={{ width: "300px", maxHeight: "300px" }}
      >
        <div className="download-box">
          <span className="badge pills">
            <img className="download" src={download} alt="" />
          </span>
        </div>
        <img
          src={img}
          width={"100%"}
          height={"300px"}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
  background-color: rgb(3, 3, 3);
          <h5 className="card-title fs-6 text-light text-center">{desc}</h5>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
