import React from 'react';

const Images = (props) => {
    return (
        <img src={props.imgsrc} width="300px" height="250px" alt="" className="card_img" />
    );
}

export default Images;