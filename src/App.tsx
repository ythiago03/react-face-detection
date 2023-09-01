import React, {FC, useEffect, useRef} from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

const App: FC = () => {

  const imgRef = useRef();
  const canvasRef = useRef();
  const loadModels =  async () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ])
      .then(res => console.log(res))
      .catch(e => console.error(e));
  };
  useEffect(() => {
    imgRef.current && loadModels;
  }, []);

  return (
    <div className="app">
      <img 
        ref={imgRef} 
        src="https://cdn.pixabay.com/photo/2017/08/05/21/23/people-2585733_1280.jpg" 
        alt="Photos" 
        width={700} />
      <canvas ref={canvasRef} width={700} height={470}/>
    </div>
  );
};

export default App;
