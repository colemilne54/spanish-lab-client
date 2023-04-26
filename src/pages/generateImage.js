import React, { useState } from 'react';
import { generateImage } from './openai-api'

function ImageComponent({ prompt }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchImage = async () => {
    setIsLoading(true);
    const imageData = await generateImage(prompt);

    if (imageData && imageData.data) {
      setImageUrl(imageData.data);
    } else {
      console.error('Failed to generate image');
    }
    setIsLoading(false);
  };

  return (
    <div className ="standardPage">
      <h3>{prompt}</h3>
      {isLoading && <p>Loading...</p>}
      {imageUrl && <img src={imageUrl} alt="Generated Image From Prompt"/>}
      <br/>
      <button className = "primaryButton" onClick={fetchImage}>Generate Image</button>
    </div>
  );
}

export default ImageComponent;
