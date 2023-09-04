import { FC, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';


const Detections: FC = () => {


  
    
  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImg = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: 700,
      height: 470,
    });
    const resized = faceapi.resizeResults(detections, {
      width: 700,
      height: 470,
    });
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      
  };

  const loadModels =  async () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]).then(handleImg)
      .catch(e => console.error(e));
  };
  useEffect(() => {
    imgRef.current && loadModels();
  }, []);

  return (
    <div>

<img 
        crossOrigin="anonymous"
        ref={imgRef} 
        src="https://cdn.pixabay.com/photo/2014/06/18/13/44/emotions-371238_1280.jpg" 
        alt="Photos" 
        width={700}
        height={470}
      />
      <canvas ref={canvasRef} width={700} height={470}/>

    </div>
  );
};

export default Detections;
