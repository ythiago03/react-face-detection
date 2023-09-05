import {FC, useEffect, useState} from 'react';

import './NewPost.css';
import Detections from '../Detections/Detections';

const NewPost: FC = () => {

  const [file, setFile] = useState(null);
  const [urlImg, setUrlImg] = useState(null);

  useEffect(() => {
    file && setUrlImg(URL.createObjectURL(file));  
  }, [file]);

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
            <button>Upload Image</button>
          </div> 

        </div>
      }
    </div>
  );
};

export default NewPost;
