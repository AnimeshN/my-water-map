import React,{useRef} from 'react'
import Webcam from 'react-webcam'
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}


export default function WebCamCapture() {
    const webcamRef = useRef(null);

    return <div className="webcamCapture">
        <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        />
    </div>
}
