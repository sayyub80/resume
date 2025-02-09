import React from 'react';


const Card = ({ name, description, imageUrl,gridColValue,gridRowValue }) => {
    return (
        <div className={` grid-cols-${gridColValue} grid-rows-${gridRowValue} gap-4`}>
        <div className="bg-white shadow-md rounded-lg p-4">
             <img src={imageUrl}></img>
            <h3 className="font-bold">{name}</h3>
            <p>{description}</p>
        </div>
        </div>
    );
};

export default Card;
