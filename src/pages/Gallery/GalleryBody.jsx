import React, { useContext, useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";
import { Gallery } from "../../context/GalleryManager";
import { useNavigate } from "react-router-dom";
import { GetItems } from "../../services/setLocalItems";

function GalleryBody() {
  const { GalleryStorage, addImg, validToken } = useContext(Gallery);

  const token = GetItems("token");
  const navigate = useNavigate();

  if (token == undefined) {
    navigate("/login");
  }
  async function valid() {
    let res = await validToken(token);
    console.log(res.status);
    if (res.status != "success") {
      navigate("/login");
    }
  }
  useEffect(() => {
    valid();
  }, []);

  const inp = useRef();
  const [search, setSearch] = useState("");
  const searchImg = (e) => {
    if (e.key == "Enter") {
      let explore = inp.current.value;
      setSearch(explore);
      addImg(explore);
    }
  };
  return (
    <div className="container d-flex flex-column">
      <div className="container mb-3 mt-4">
        <div className="mb-3 text-center fs-5 fw-bold">
          <label className="form-label">Search Image</label>
          <input
            ref={inp}
            type="email"
            className="form-control w-30"
            onKeyDown={(e) => {
              searchImg(e);
            }}
          />
        </div>
      </div>

      <div className="row " style={{ height: "600px", overflow: "scroll" }}>
        {/* columns */}
        {GalleryStorage.map(({ img, title }, idx) => {
          return <GalleryCard img={img} desc={title} key={idx} />;
        })}
      </div>
      {search == "" ? null : (
        <div className="container text-center mt-4">
          <button
            className="btn btn-danger"
            onClick={() => {
              addImg(search);
            }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryBody;
