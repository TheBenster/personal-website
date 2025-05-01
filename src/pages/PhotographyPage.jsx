import React, { useState } from "react";
import "../styles/photography.css";

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="images">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="image-item"
            onClick={() => openLightbox(photo)}
          >
            <img src={photo.src} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <div className="lightbox-caption">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
              <p className="photo-meta">
                {selectedPhoto.camera && (
                  <span>Camera: {selectedPhoto.camera}</span>
                )}
                {selectedPhoto.location && (
                  <span>Location: {selectedPhoto.location}</span>
                )}
                {selectedPhoto.date && <span>Date: {selectedPhoto.date}</span>}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PhotographyPage = () => {
  // Sample photography data - in a real app, you would fetch this from an API
  const photos = [
    {
      id: 1,
      title: "Temporality, Fleeting",
      src: "/img/temporality_fleeting.JPG",
      description: "Capture of a fleeting moment in time.",
      camera: "Canon M50 MkII",
      location: "Mocksville, NC",
      date: "June 2024",
    },
    {
      id: 2,
      title: "A Reluctant Author",
      src: "/img/reluctant_author.JPG",
      description: "Minimalist composition of my favorite cat, Toby.",
      camera: "Canon M50 MkII",
      location: "Mocksville, NC",
      date: "June 2024",
    },
    {
      id: 3,
      title: "Low Light study of Cactus",
      src: "/img/lowlight_trich.JPG",
      description: "A study on the light dynamics of my camera.",
      camera: "Canon M50 MkII",
      location: "Mocksville, NC",
      date: "April 2024",
    },
    // {
    //   id: 4,
    //   title: "Street Life",
    //   src: "/src/assets/img/street.jpg",
    //   description:
    //     "Documenting authentic moments of daily life on city streets.",
    //   camera: "Leica Q2",
    //   location: "New York, NY",
    //   date: "March 2024",
    // },
    // {
    //   id: 5,
    //   title: "Macro World",
    //   src: "/src/assets/img/macro.jpg",
    //   description: "Revealing the intricate details of a small flower.",
    //   camera: "Canon EOS 90D",
    //   location: "Home Garden",
    //   date: "July 2024",
    // },
    // {
    //   id: 6,
    //   title: "Portrait Study",
    //   src: "/src/assets/img/portrait.jpg",
    //   description: "Exploring emotion and character through portraiture.",
    //   camera: "Nikon Z7 II",
    //   location: "Studio",
    //   date: "February 2024",
    // },
  ];

  return (
    <section className="photography-page">
      <div className="home photos">
        <h1 className="page-title">Photography Portfolio</h1>
        <p className="page-description">
          A collection of my photographic work exploring various styles and
          subjects. Click on any image to view more details.
        </p>
        <PhotoGallery photos={photos} />
      </div>
    </section>
  );
};

export default PhotographyPage;
