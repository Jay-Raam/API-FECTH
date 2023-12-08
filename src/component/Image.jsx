import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./image.css"

const Image = () => {
  const [data, setData] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '40846508-39adf96a0eaf80ec902de2286',
            per_page: 200, 
          },
        });
        setData(response.data.hits);
        console.log(response.data.hits);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const toggleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container">
      <button onClick={toggleClick} className='btn'>Images</button>
      {showImage && (
        <ul className='onee'>
          {data.map((photo) => (
            <li key={photo.id} className="twoo">
              <img src={photo.webformatURL} alt={photo.tags} className="three" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Image;
