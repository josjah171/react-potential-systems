import React, { useState } from 'react';
import './App.css';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import {images} from './images'

function gallery () {
	const [index, setIndex] = useState(0);

	

	return (
		<div>
    		<Gallery
      			style={{
        			background: "black",
        			height: "100vh",
        			width: "100vw"
      			}}
      			index={index}
      			onRequestChange={i => {
		  			setIndex(i);
		  
      			}}
    		>
      			{images.map(image => (
        			<GalleryImage objectFit="contain" key={image} src={image} />
      			))}
    		</Gallery>

		</div>
  );
}
export default gallery;