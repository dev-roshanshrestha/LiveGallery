import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
export const Gallery = createContext({
  GalleryStorage: [],
  addImg: () => {},
});

const galleryReducer = (initial, action) => {
  let newItems = initial;
  if (action.type == "fake") {
    // console.log(action.payload);
    newItems = [action.payload, ...newItems];
  }
  return newItems;
};
function GalleryManager({ children }) {
  const [page, setPage] = useState(1);
  const [GalleryStorage, dispatchGallery] = useReducer(galleryReducer, []);

  const accesskey = "S7YhvkXdxfIMv3NBdJY6yXZvS_Fvz9JCCXBpDAit7ec";
  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${"books"}&client_id=${accesskey}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        data.results.map((d) => {
          initialItems(d);
          setPage(2);
        });
      });
  }, []);

  const initialItems = (imgObj) => {
    dispatchGallery({
      type: "fake",
      payload: {
        img: imgObj.urls.small,
        title: imgObj.alt_description,
      },
    });
  };
  const addImg = (search) => {
    // console.log("Addimg");
    setPage(page + 1);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${accesskey}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        data.results.map((d) => {
          initialItems(d);
        });
      });
  };

  return (
    <Gallery.Provider value={{ GalleryStorage, initialItems, addImg }}>
      <div className="container">{children}</div>
    </Gallery.Provider>
  );
}

export default GalleryManager;
