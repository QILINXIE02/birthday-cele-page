// src/components/Gallery.js
import React from 'react';
import Gallery from 'react-photo-gallery';

const MyGallery = () => {
    const photos = [
        {
            src: 'https://example.com/image1.jpg',
            width: 4,
            height: 3,
        },
        {
            src: 'https://example.com/image2.jpg',
            width: 1,
            height: 1,
        },
        // Add more photos as needed
    ];

    return <Gallery photos={photos} />;
};

export default MyGallery;
