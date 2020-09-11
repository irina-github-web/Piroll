import React, { useState, useEffect, useCallback } from "react";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "#10c9c3",
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "18px",
    captionContainerPadding: "20px 10px",
    captionColor: "#10c9c3",
    captionFontWeight: 700,
    captionTextTransform: "uppercase",
  },
  settings: {
    overlayColor: "rgb(45 44 45 / 82%);",
    lightboxTransitionSpeed: 0.6,
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 3000,
    hideControlsAfter: false,
  },
  progressBar: {
    height: "3px",
    fillColor: "#10c9c3",
    backgroundColor: "rgb(45 44 45 / 82%);",
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsPosition: "right",
    thumbnailsOpacity: 0.4,
    thumbnailsAlignment: "space-between",
    thumbnailsSize: ["130px", "100px"],
  },
};

const GalleryWithApi = () => {
  const [images, setImages] = useState([]);

  // console.log(images)

  let page = 0;

  const fetchData = useCallback(async () => {
    page++;
    const response = await fetch(
      "https://picsum.photos/v2/list?limit=8&page=" + page
    );
    const data = await response.json();
    setImages((prevData) => {
      return [...prevData, ...data];
    });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SRLWrapper options={options}>
       
          {!images ? (
            <div className="row">
              <div className="col-12">
                <h1>LOADING...</h1>
              </div>
            </div>
          ) : (
            <div className="works__list">
              {images.map(({ id, download_url, author }) => (
                <div key={id} className="works__item">
                  <a href={download_url} data-attribute="SRL">
                    <img className="thumb img-responsive" src={download_url} alt={author} />
                  </a>
                </div>
              ))}
            </div>
          )}
    
      </SRLWrapper>
    </div>
  );
};

export default GalleryWithApi;
