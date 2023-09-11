import {FC, useEffect, useState} from 'react';

import './NewPost.css';
import Detections from '../Detections/Detections';

const NewPost: FC = () => {

  const [file, setFile] = useState(null);
  const [urlImg, setUrlImg] = useState(null);
  const [inputUrl, setInputUrl] = useState(null);

  useEffect(() => {
    file && setUrlImg(URL.createObjectURL(file));  
  }, [file]);

  const submitUrl = () => {
    if(!inputUrl)return;
    if(!inputUrl.toLowerCase().endsWith('.jpg' || '.pgn' || '.jpeg')){
      window.alert('Please choose a Url with ends with JPEG, PGN or JPG');
      return;
    }
    if(!file)setUrlImg(inputUrl);
  };

  return (
    <div>
      {urlImg 
        ? <Detections url={urlImg} />
        : <div  className="newPost">

          <div className="image">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_1280.jpg" alt="People Talking Image" />
          </div>
          <div className="upload">
            <h1>Upload photos and tag your friends</h1>
            <label>
              Upload a Image    
              <input onChange={e => setFile(e.target.files[0])}  type="file" style={{visibility:'hidden'}} />
            </label>
            <span>Or place a URL from an image</span>
            <input type="text" className="urlImg" onChange={e => setInputUrl(e.target.value)}/>
            <button onClick={submitUrl} >Upload Image</button>
          </div> 

        </div>
      }
    </div>
  );
};

export default NewPost;
