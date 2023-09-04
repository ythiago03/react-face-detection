import {FC} from 'react';

import './NewPost.css';

const NewPost: FC = () => {

  return (
    <div className="newPost">
      <div className="image">
        <img src="https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_1280.jpg" alt="People Talking Image" />
      </div>
      <div className="upload">
        <h1>Upload photos and tag your friends</h1>
        <label>
          Upload a Image    
          <input type="file" style={{visibility:'hidden'}} />
        </label>
        <span>Or place a URL from an image</span>
        <button>Upload Image</button>
      </div>
    </div>
  );
};

export default NewPost;
