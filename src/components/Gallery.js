import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Include the styles

const images = [
  {
    original: 'images/birthday.jpg',  // Local image path
    thumbnail: 'images/birthday.jpg',  // Use the same image for thumbnail
    description: 'Birthday Celebration', // Description for the image
  },
];

const PhotoGallery = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <Gallery items={images} />
    </div>
  );
};

export default PhotoGallery;
