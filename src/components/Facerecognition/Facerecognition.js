import React from 'react';
import './Facerecognition.css'


const Facerecognition = ({ imageURL, box }) => {
    return (
        <div className="center ma">
            <div>
            <img id='inputimage' alt='' src={imageURL} width= '500px' height= 'auto'/>
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

            </div>
            </div>
        </div>
    );
}

export default Facerecognition;