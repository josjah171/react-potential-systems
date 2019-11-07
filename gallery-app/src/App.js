import React from 'react';
import './App.css';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import {images} from './images'

export default function App() {
	const [index, setIndex] = React.useState(0);

	let imagelen = images.length;

	return (
    <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
		  setIndex(i);
		  if (i === imagelen) {
			  setIndex(0);
		  }
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}


