import React from "react";

function GalleryCard({ img, desc }) {
  return (
    <div className="col mt-2 d-flex shadow">
      <div
        className="card overflow-hidden"
        style={{ width: "400px", maxHeight: "400px" }}
      >
        <img
          src={img}
          width={"100%"}
          height={"300px"}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{desc}</h5>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
